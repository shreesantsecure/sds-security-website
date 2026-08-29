/**
 * Opens the Servewell tenant pre-activation URL first to set session context,
 * then redirects the newly opened tab to the specific portal section/URL.
 * Fully compatible across all desktop and mobile browsers.
 */
export function openTenantPortal(
    targetUrl: string,
    tenantUrl: string = "https://servewell.me/sreesecuredesignsolutions/"
) {
    if (typeof window === "undefined") return;

    // Synchronously open tenant pre-activation URL in a new tab during user click
    const portalWin = window.open(tenantUrl, "_blank");

    if (portalWin) {
        // Allow tenant session initialization before redirecting to the target portal
        setTimeout(() => {
            try {
                portalWin.location.href = targetUrl;
            } catch (err) {
                console.error("Portal redirect error:", err);
            }
        }, 600);
    } else {
        // Fallback for pop-up blocked environments
        window.location.href = tenantUrl;
    }
}
