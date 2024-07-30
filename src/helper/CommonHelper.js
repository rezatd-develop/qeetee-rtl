"use client"

export const isMobileDevice = () => {
    if (typeof window !== "undefined") {
        const { innerWidth, innerHeight } = window;
        const mobileWidthThreshold = 768;
        const mobileHeightThreshold = 1024;
        return innerWidth <= mobileWidthThreshold || innerHeight <= mobileHeightThreshold;
    }
    return false;
};

