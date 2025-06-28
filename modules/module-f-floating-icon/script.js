// Floating Hello World Icon JavaScript

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    
    // Create the floating icon HTML if it doesn't exist
    if (!document.getElementById('floatingIcon')) {
        const floatingIconHTML = `
            <a href="/home" class="floating-hello-icon" id="floatingIcon">
                <div class="floating-content">
                    <span class="wave-emoji">👋</span>
                    <span class="hello-text">Hello World</span>
                </div>
            </a>
        `;
        
        // Add to body
        document.body.insertAdjacentHTML('beforeend', floatingIconHTML);
    }
    
    // Get the floating icon element
    const floatingIcon = document.getElementById('floatingIcon');
    
    if (floatingIcon) {
        // Click animation
        floatingIcon.addEventListener('click', function(e) {
            // Add click animation
            this.classList.add('clicked');
            
            // Remove click animation after it completes
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 600);
            
            // Let the link navigate normally
        });
        
        // Optional: Add drag functionality
        let isDragging = false;
        let startX, startY, initialX, initialY;
        
        floatingIcon.addEventListener('mousedown', function(e) {
            isDragging = true;
            startX = e.clientX - floatingIcon.offsetLeft;
            startY = e.clientY - floatingIcon.offsetTop;
            initialX = e.clientX;
            initialY = e.clientY;
            e.preventDefault(); // Prevent text selection
        });
        
        document.addEventListener('mousemove', function(e) {
            if (isDragging) {
                e.preventDefault();
                const newX = e.clientX - startX;
                const newY = e.clientY - startY;
                
                // Keep within viewport bounds
                const maxX = window.innerWidth - floatingIcon.offsetWidth;
                const maxY = window.innerHeight - floatingIcon.offsetHeight;
                
                floatingIcon.style.left = Math.max(0, Math.min(newX, maxX)) + 'px';
                floatingIcon.style.top = Math.max(0, Math.min(newY, maxY)) + 'px';
                floatingIcon.style.right = 'auto';
                floatingIcon.style.bottom = 'auto';
            }
        });
        
        document.addEventListener('mouseup', function(e) {
            if (isDragging) {
                isDragging = false;
                
                // If it was just a click (not a drag), let the link work
                const distance = Math.sqrt(
                    Math.pow(e.clientX - initialX, 2) + Math.pow(e.clientY - initialY, 2)
                );
                
                // If minimal movement, it's a click - let the default link behavior happen
            }
        });
    }
});