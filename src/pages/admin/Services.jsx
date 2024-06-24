import { useEffect, useRef, useState } from "react";

const ServiceList = () => {
    const [touchPositions, setTouchPositions] = useState([]);
    const circleRef = useRef(null);

    const handleTouchEnd = (e) => {
        const rect = circleRef.current.getBoundingClientRect();

        const newTouchPositions = Array.from(e.changedTouches).map(touch => ({
            id: Date.now() + Math.random(),
            x: touch.clientX - rect.left,
            y: touch.clientY - rect.top,
        }));

        setTouchPositions(prevPositions => [
            ...prevPositions,
            ...newTouchPositions
        ]);

        // Xóa các đám mây sau 3 giây
        newTouchPositions.forEach(position => {
            setTimeout(() => {
                setTouchPositions(prevPositions =>
                    prevPositions.filter(pos => pos.id !== position.id)
                );
            }, 3000); // Thời gian đợi 3 giây
        });
    };
    return (
        <div className="circle"
            onTouchEnd={handleTouchEnd}
            ref={circleRef}
            style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            {touchPositions.map((touch) => (
                <div
                    key={touch.id}
                    className="cloud"
                    style={{
                        left: `${touch.x}px`,
                        top: `${touch.y}px`
                    }}
                >+10</div>
            ))}
        </div>
    )
}

export default ServiceList