import { GenericVector } from "./GenericVector";

export class Vector3 extends GenericVector<3> {

    public get x() { return this.components[0]; }
    public set x(value: number) { this.components[0] = value; }
    public get y() { return this.components[1]; }
    public set y(value: number) { this.components[1] = value; }
    public get z() { return this.components[2]; }
    public set z(value: number) { this.components[2] = value; }

    public cross(vector: Vector3) {
        return this.set([
            this.y * vector.z - this.z * vector.y,
            this.z * vector.x - this.x * vector.z,
            this.x * vector.y - this.y * vector.x
        ]);
    }

}