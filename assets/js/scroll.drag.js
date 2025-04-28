const initialHash = window.location.hash;
if (initialHash) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
}
window.addEventListener('DOMContentLoaded', function () {
    if (initialHash) {
        setTimeout(() => {
            const target = document.querySelector(initialHash);
            if (target) {
                let yOffset = 0;
                if (initialHash === '#team') yOffset = 1900;
                else if (initialHash === '#solutions') yOffset = 1250;

                const targetPosition = target.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                history.replaceState(null, '', window.location.pathname + window.location.search + initialHash);
            }
        }, 500);
    }
});
