import { createPortal } from "react-dom";
import cls from "./Drawer.module.scss";
import { useDrag } from "@use-gesture/react";
import { a, config, useSpring } from "@react-spring/web";
import { useCallback, useEffect } from "react";

const height = window.innerHeight - 100;

export const Drawer = ({ closeHandler, isOpen, children }) => {
  const [{ y }, api] = useSpring(() => ({ y: height }));
  const closeClickModal = (e) => {
    if (e.target === e.currentTarget) {
      closeHandler();
    }
  };

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...config.stiff, velocity },
      onResolve: closeHandler,
    });
  };

  const bind = useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    }
  );

  if (!isOpen) {
    return null;
  }

  const display = y.to((py) => (py < height ? "block" : "none"));

  return createPortal(
    <div className={cls.Drawer} onClick={closeClickModal}>
      <div onClick={closeHandler} className={cls.overlay} />
      <a.div
        className={cls.sheet}
        {...bind()}
        style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
      >
        {children}
      </a.div>
    </div>,
    document.getElementById("drawer-root")
  );
};
