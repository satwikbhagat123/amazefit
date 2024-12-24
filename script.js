// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate the horizontal scroll of the content-bottom-img
gsap.fromTo(
    "#content-bottom-img",
    {
        x: "0%", // Start position of the image
    },
    {
        x: "-50%", // End position of the image
        ease: "none", // Linear easing for smooth scrolling
        scrollTrigger: {
            trigger: "#content-bottom", // Trigger the animation when #content-bottom comes into view
            start: "top 50%", // Start the animation when the top of #content-bottom is at 50% of the viewport
            end: "bottom top", // End the animation when the bottom of #content-bottom is at the top of the viewport
            scrub: 2, // Add a scrub effect for smoother animation tied to scroll position
            pin: "#content-bottom", // Pin only the #content-bottom section during animation
            markers: false, // Set to true for debugging scroll behavior, false for production
        },
    }
);

// Optionally, you can add animations for other sections if needed
// For example, you might animate the appearance of the cards section:
gsap.fromTo(
    "#cards",
    {
        y: "100%", // Start position of the cards (below the viewport)
        opacity: 1, // Start with 0 opacity
    },
    {
        y: "0%", // End position (aligned to its original placement)
        opacity: 1, // Fully visible
        scrollTrigger: {
            trigger: "#content-bottom", // Trigger this animation when #content-bottom is in view
            start: "bottom top", // Start when the bottom of #content-bottom reaches the top of the viewport
            end: "+=100%", // Continue the animation for the next 100% of the viewport height
            scrub: true, // Smooth transition tied to scroll position
        },
    }
);
