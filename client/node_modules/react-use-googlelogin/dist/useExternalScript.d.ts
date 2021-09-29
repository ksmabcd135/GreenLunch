/**
 * Loads an internal script into a tag under the provided `id`. Useful for libraries
 * such as Stripe checkout and Google maps.
 * @private
 *
 * @param id - ID to give the created DOM node.
 * @param src - URL to load the script from.
 * @param callback - Callback to run when the script is loaded.
 */
export declare const useExternalScript: (id: string, src: string, callback: () => void) => void;
