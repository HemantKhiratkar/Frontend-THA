class Cylinder {
   constructor(cyl_height, cyl_radius) {
    this.cyl_height = cyl_height;
    this.cyl_radius = cyl_radius;
  }
    get volume(){
      return this.Volume();
    }
  
    Volume() {
    return (Math.PI * this.cyl_height * this.cyl_radius * this.cyl_radius);
  }
}
const cyl = new Cylinder(10, 10);
console.log('Volume of Cylinder =', cyl.volume.toFixed(4));