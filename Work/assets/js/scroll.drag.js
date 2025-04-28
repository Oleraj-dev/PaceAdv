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
                if (initialHash === '#clients') yOffset = 0;
                else if (initialHash === '#industry') yOffset = 820;
                else if (initialHash === '#studio') yOffset = 1260;

                const targetPosition = target.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                history.replaceState(null, '', window.location.pathname + window.location.search + initialHash);
            }
        }, 500);
    }
});
