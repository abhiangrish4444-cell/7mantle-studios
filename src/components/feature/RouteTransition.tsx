import { useLayoutEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface RouteTransitionProps {
  children: ReactNode;
}

export default function RouteTransition({ children }: RouteTransitionProps) {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;

    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previous;
  }, [pathname]);

  return (
    <div key={pathname} className="route-shell">
      <div
        aria-hidden="true"
        className="route-accent-line pointer-events-none fixed left-0 top-0 z-[60] h-[2px] w-full bg-primary-500"
      />
      {children}
    </div>
  );
}