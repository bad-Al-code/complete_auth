import React, { useEffect, useRef, useState } from "react";

const App = () => {
    const [isVisionUI, setIsVisionUI] = useState(false);
    const containerRef = useRef(null);
    const honeycomb = [5, 6, 7, 8, 9, 8, 7, 6, 5];
    const icons = [
        "🚀",
        "🎸",
        "🤖",
        "🫶",
        "🔥",
        "🕹️",
        "👾",
        "✨",
        "🌴",
        "🖥️",
        "💻",
        "⌨️",
        "💡",
        "🕶️",
        "⚙️",
        "🍒",
        "🧙‍♂️",
        "🎮",
        "👽",
        "🌌",
        "🎧",
        "🌒",
        "🌓",
        "🌔",
        "🎵",
        "🎶",
        "❤️",
        "🎙️",
        "📸",
        "🕰️",
        "🚀",
        "🎸",
        "🤖",
        "🫶",
        "🔥",
        "🕹️",
        "👾",
        "✨",
        "🌴",
        "🖥️",
        "💻",
        "⌨️",
        "💡",
        "🕶️",
        "⚙️",
        "🍒",
        "🦄",
        "📱",
        "🖨️",
        "📡",
        "🔬",
        "🔭",
        "🎚️",
        "🎛️",
        "🧬",
        "🔮",
        "🧲",
        "🛸",
        "🪐",
        "🌠",
        "👓",
    ];

    const ripple = (target, hexagons) => {
        const container = containerRef.current;
        if (container.classList.contains("show-ripple")) return;

        const targetRect = target.getBoundingClientRect();
        const hexagonElements = Array.from(hexagons);
        const data = hexagonElements
            .map((element) => {
                const rect = element.getBoundingClientRect();
                const distance = Math.round(
                    Math.sqrt(
                        Math.pow(rect.x - targetRect.x, 2) +
                            Math.pow(rect.y - targetRect.y, 2)
                    )
                );
                return { element, distance };
            })
            .sort((a, b) => a.distance - b.distance);

        const max = data[data.length - 1];
        data.forEach((item) =>
            item.element.style.setProperty(
                "--ripple-factor",
                `${(item.distance * 100) / max.distance}`
            )
        );

        container.classList.add("show-ripple");
        const cleanUp = () => {
            requestAnimationFrame(() => {
                container.classList.remove("show-ripple");
                data.forEach((item) =>
                    item.element.style.removeProperty("--ripple-factor")
                );
            });
        };

        setTimeout(cleanUp, 1000);
    };

    useEffect(() => {
        const container = containerRef.current;
        const hexagons = container.querySelectorAll(".hexagon");

        setTimeout(() => {
            ripple(hexagons[0], hexagons);
            setTimeout(() => {
                setIsVisionUI(true);
                setTimeout(() => {
                    ripple(hexagons[0], hexagons);
                }, 600);
            }, 900);
        }, 300);
    }, []);

    let iconIndex = -1;

    return (
        <div
            className="w-screen h-screen flex items-center justify-center overflow-hidden relative"
            style={{
                "--color-primary": "#ee75d2",
                "--color-secondary": "#75d8ee",
                "--color-tertiary": "#deee75",
                "--color-quaternary": "#9375ee",
                "--color-surface": "black",
                "--bg": "linear-gradient(to bottom, color-mix(in srgb, var(--color-quaternary), black 70%), var(--color-surface))",
                background: "var(--bg)",
                color: "var(--color-on-surface)",
            }}
        >
            {/* Background overlay */}
            <div
                className="absolute inset-0 pointer-events-none transition-all duration-600 ease-in-out"
                style={{
                    backgroundImage: `url(https://assets.codepen.io/907471/vision-pro-palm.jpg)`,
                    background:
                        "radial-gradient(at center, transparent 80%, black), linear-gradient(to top, rgba(0, 0, 0, 0.3) 70%, transparent)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    opacity: isVisionUI ? 1 : 0,
                    filter: isVisionUI ? "blur(0)" : "blur(0.5rem)",
                }}
            />

            <div
                ref={containerRef}
                className="relative flex flex-col items-center"
                style={{ "--hexagon-size": "8vmin", "--gap": "0.1vmin" }}
            >
                <div className="flex flex-row flex-wrap justify-center">
                    {honeycomb.map((columnSize, columnIndex) => {
                        const cells = [];
                        for (let i = 0; i < columnSize; i++) {
                            iconIndex++;
                            cells.push(
                                <div
                                    key={`${columnIndex}-${i}`}
                                    className="hexagon cursor-pointer backdrop-blur-lg hover:brightness-120"
                                    style={{
                                        "--column": columnIndex,
                                        "--index": i + 1,
                                        "--icon": `"${icons[iconIndex]}"`,
                                        "--color-surface-container": isVisionUI
                                            ? "rgba(255, 255, 255, 0.35)"
                                            : undefined,
                                    }}
                                    onClick={(e) =>
                                        ripple(
                                            e.target,
                                            containerRef.current.querySelectorAll(
                                                ".hexagon"
                                            )
                                        )
                                    }
                                />
                            );
                        }
                        return (
                            <div
                                key={columnIndex}
                                className="column flex flex-col items-center mx-[-0.2vmin]"
                                style={{
                                    "--column": columnIndex,
                                    transform: `translateY(${
                                        columnIndex % 2 ? "4vmin" : "0"
                                    })`,
                                }}
                            >
                                {cells}
                            </div>
                        );
                    })}
                </div>
            </div>

            <button
                className={`switch absolute top-4 right-4 w-8 h-4 cursor-pointer text-2vmin ${
                    isVisionUI ? "checked" : ""
                }`}
                style={{
                    "--column": 2,
                    "--index": 6,
                    "--color-surface-container": isVisionUI
                        ? "rgba(255, 255, 255, 0.35)"
                        : undefined,
                }}
                onClick={() => setIsVisionUI(!isVisionUI)}
            />

            <style jsx>{`
                .vision-ui {
                    --color-surface-container: rgba(255, 255, 255, 0.35);
                    --color-on-surface: white;
                    --hover-filter: brightness(1.5);
                }

                .hexagon {
                    width: var(--hexagon-size);
                    aspect-ratio: 1;
                    position: relative;
                    margin: var(--gap);
                    background: var(
                        --color-surface-container,
                        color-mix(
                            in srgb,
                            var(--color-secondary),
                            var(--color-primary)
                                calc(var(--column) * var(--index) * 3%)
                        )
                    );
                    clip-path: polygon(
                        98.66024% 45%,
                        99.39693% 46.5798%,
                        99.84808% 48.26352%,
                        100% 50%,
                        99.84808% 51.73648%,
                        99.39693% 53.4202%,
                        98.66025% 55%,
                        78.66025% 89.64102%,
                        77.66044% 91.06889%,
                        76.42788% 92.30146%,
                        75% 93.30127%,
                        73.4202% 94.03794%,
                        71.73648% 94.48909%,
                        70% 94.64102%,
                        30% 94.64102%,
                        28.26352% 94.48909%,
                        26.5798% 94.03794%,
                        25% 93.30127%,
                        23.57212% 92.30146%,
                        22.33956% 91.06889%,
                        21.33975% 89.64102%,
                        1.33975% 55%,
                        0.60307% 53.4202%,
                        0.15192% 51.73648%,
                        0% 50%,
                        0.15192% 48.26352%,
                        0.60307% 46.5798%,
                        1.33975% 45%,
                        21.33975% 10.35898%,
                        22.33956% 8.93111%,
                        23.57212% 7.69854%,
                        25% 6.69873%,
                        26.5798% 5.96206%,
                        28.26352% 5.51091%,
                        30% 5.35898%,
                        70% 5.35898%,
                        71.73648% 5.51091%,
                        73.4202% 5.96206%,
                        75% 6.69873%,
                        76.42788% 7.69854%,
                        77.66044% 8.93111%,
                        78.66025% 10.35898%
                    );
                }

                .hexagon:after {
                    content: var(--icon);
                    display: grid;
                    place-items: center;
                    position: absolute;
                    filter: var(--icon-filter);
                    font-size: 2.5vmin;
                    inset: 0;
                }

                @keyframes ripple {
                    from {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(
                            max(0.8, calc(var(--ripple-factor) / 100))
                        );
                        opacity: 0.42;
                    }
                    65% {
                        opacity: 1;
                    }
                    70% {
                        transform: scale(1.5);
                        filter: var(--ripple-filter);
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }

                .show-ripple .hexagon {
                    --duration: 0.45s;
                    animation: ripple var(--duration) ease-in-out;
                    animation-duration: max(
                        var(--duration),
                        calc(var(--duration) * var(--ripple-factor) / 100)
                    );
                    animation-delay: calc(var(--ripple-factor) * 8ms);
                }

                .switch {
                    background: var(
                        --color-surface-container,
                        color-mix(
                            in srgb,
                            var(--color-secondary),
                            var(--color-primary)
                                calc(var(--column) * var(--index) * 3%)
                        )
                    );
                    clip-path: polygon(
                        98.66024% 45%,
                        99.39693% 46.5798%,
                        99.84808% 48.26352%,
                        100% 50%,
                        99.84808% 51.73648%,
                        99.39693% 53.4202%,
                        98.66025% 55%,
                        78.66025% 89.64102%,
                        77.66044% 91.06889%,
                        76.42788% 92.30146%,
                        75% 93.30127%,
                        73.4202% 94.03794%,
                        71.73648% 94.48909%,
                        70% 94.64102%,
                        30% 94.64102%,
                        28.26352% 94.48909%,
                        26.5798% 94.03794%,
                        25% 93.30127%,
                        23.57212% 92.30146%,
                        22.33956% 91.06889%,
                        21.33975% 89.64102%,
                        1.33975% 55%,
                        0.60307% 53.4202%,
                        0.15192% 51.73648%,
                        0% 50%,
                        0.15192% 48.26352%,
                        0.60307% 46.5798%,
                        1.33975% 45%,
                        21.33975% 10.35898%,
                        22.33956% 8.93111%,
                        23.57212% 7.69854%,
                        25% 6.69873%,
                        26.5798% 5.96206%,
                        28.26352% 5.51091%,
                        30% 5.35898%,
                        70% 5.35898%,
                        71.73648% 5.51091%,
                        73.4202% 5.96206%,
                        75% 6.69873%,
                        76.42788% 7.69854%,
                        77.66044% 8.93111%,
                        78.66025% 10.35898%
                    );
                    backdrop-filter: blur(1rem);
                }

                .switch:after {
                    content: "👾";
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 4vmin;
                    width: 6vmin;
                    transition: transform 0.3s ease;
                    display: grid;
                    place-items: center;
                }

                .switch.checked:after {
                    transform: translateX(2vmin);
                    content: "🕶️";
                }
            `}</style>
        </div>
    );
};

export default App;
