// Function to get the device type of the user
// 1: Mobile, 2: Tablet, 3: Desktop
export const getDeviceType = () => {
	if (window.innerWidth <= 576) return 1;  // Mobile
	if (window.innerWidth <= 768) return 2;  // Tablet
	return 3;  // Desktop
}
