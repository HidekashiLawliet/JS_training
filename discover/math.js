export const PI = 3.14;

export function getCircumference(radius) {
    return 2 * Math.PI * radius;
}

export function getArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

export function getVolume(radius) {
    return 4 * PI * Math.pow(radius, 3);
}