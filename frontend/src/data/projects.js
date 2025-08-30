const projects = [
  {
    id: "dustbin-01",
    title: "3D Dustbin Design",
    description: "Developed a SolidWorks model of a versatile and hygienic kitchen dustbin featuring a swing-out lid and ergonomic handle. Designed during my Industrial Design internship at Levon Homes Private Limited, ensuring on-time delivery with attention to both functionality and aesthetics.If you want the project file, go to the contact section and message me, I’ll provide it.",
   image: "/images/dustbin.png",
 // put images in public/images/
    video: "", // optional: "/videos/dustbin-demo.mp4"
    link: "https://drive.google.com/file/d/1HiJ2AdQhyt_9i1VtSEQwbhhPF8gY3lPk/view?usp=drive_link"
  },
  {
  id: "pcm-fin-btms",
  title: "PCM Fin Structures for Battery Thermal Management",
  description: "Designed and analyzed various internal and external fin structures in PCM using ANSYS (FEA) for battery thermal management. Achieved a 1.62% reduction in cell temperature by optimizing fin geometry and improving heat dissipation. Gained hands-on experience in meshing, simulation setup, and performance analysis through graphical interpretation. If you want the project file, go to the contact section and message me, I’ll provide it.",
  //image: "/images/pcm-fin-placeholder.jpg",
  video: "",
  link: "https://www.linkedin.com/posts/md-shafatullah-6a22541a6_alhamdulillah-batterythermalmanagement-pcm-activity-7360260399432126465-TsCm?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAXK9oBFlZNPsXft9BRzmZbMA88bPdSrG8"
},

  {
  id: "battery-pack-btms",
  title: "Lithium-Ion Battery Pack Design & Thermal Management System",
  description: "Ongoing final year project (2025) under Prof. Dr. Yasser Rafat. Designed a 9-cell lithium-ion battery with a water-cooling system for efficient thermal management and improved performance. Worked with DAC (Data Acquisition and Control) software for data logger integration and thermal analysis in a liquid cooling system. Tools: SolidWorks, ANSYS, Raspberry Pi. If you want the project file, go to the contact section and message me, I’ll provide it.",
  //image: "/images/battery-placeholder.jpg",
  video: "",
  link: "https://drive.google.com/file/d/1kbK0GDY9gvNnFmDZ94ZXDsIr9BVMIGTT/view?usp=drive_link"
},
{
  id: "cnc-gcode-sim",
  title: "CNC Programming & G-Code Simulation",
  description: "Project completed in November 2024 under Prof. Dr. Mohammad Ali. Designed part geometry in SolidWorks to define machining structure. Programmed toolpaths using G & M codes for drilling, cutting, and machining operations. Tools: CNC-Simulator Software, SolidWorks.",
  //image: "/images/cnc-placeholder.jpg",
  video: "",
  link: "https://www.linkedin.com/posts/md-shafatullah-6a22541a6_cncprogramming-gcode-mcode-activity-7258492399520227328-QSed?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAXK9oBFlZNPsXft9BRzmZbMA88bPdSrG8"
},
{
  id: "Aero-cfd-simulation",
  title: "Aerodynamic & CFD Simulation Projects",
  description: "Project completed in May 2024 under Prof. Dr. Mubashshir Ansari. Designed wing geometry using NACA airfoil data, meshed with precise sizing in ANSYS Fluent, and analyzed lift and drag forces. Conducted simulation and post-processing to study lift, drag, and pressure distribution. Tools: ANSYS, SolidWorks.",
  //image: "/images/aero-placeholder.jpg",
  video: "",
  link: "https://drive.google.com/file/d/1mi_wKfSuG7SbjObrFrFQj798zvgBlDO_/view?usp=drive_link"
}, 
{
  id: "gear-straight-bevel",
  title: "Straight Bevel Gear I Design",
  description: "SolidWorks model of a straight bevel gear showcasing mechanical design principles and accurate 3D geometry.",
  //image: "/images/gear-bevel.jpg",
  video: "",
  link: "https://drive.google.com/file/d/1woGGv__VjHtYByD2pGmQmnVl6HWiTaqS/view?usp=drive_link"
},

{
  id: "gear-straight-bevel-pinion",
  title: "Straight Bevel Pinion (ISO) Design",
  description: "Designed in SolidWorks, this pinion gear is part of the bevel gear system following ISO standards.",
  //image: "/images/gear-pinion.jpg",
  video: "",
  link: "https://drive.google.com/file/d/1KyrDkXjDg0S-z97nau6ClCMhfPz2xF8M/view?usp=drive_link"
},

{
  id: "gear-sun",
  title: "Sun Gear Design",
  description: "Core component of a planetary gear system, modeled in SolidWorks for precision and mechanical accuracy.",
  //image: "/images/gear-sun.jpg",
  video: "",
  link: "https://drive.google.com/file/d/1-DZsQzCjbKzI63j-bSTJWMH0W_AOoFIR/view?usp=drive_link"
},

{
  id: "gear-ring",
  title: "Ring Gear Design",
  description: "SolidWorks model of a ring gear designed for planetary gear assembly applications.",
  //image: "/images/gear-ring.jpg",
  video: "",
  link: "https://drive.google.com/file/d/1NozY6QAStqJoLxj-W9dYlEqajJDH5uWy/view?usp=drive_link"
},

{
  id: "gear-spur",
  title: "Spur Gear Design",
  description: "Standard spur gear designed in SolidWorks to demonstrate accurate tooth profile and meshing properties.",
  //image: "/images/gear-spur.jpg",
  video: "",
  link: "https://drive.google.com/file/d/1kCUEHxaN2NKvSIJUScWYZDjDqIjLRFuG/view?usp=drive_link"
},

{
  id: "gear-helical",
  title: "Helical Gear (ISO) Design",
  description: "SolidWorks model of a helical gear with ISO standard geometry, highlighting smooth transmission properties.",
  //image: "/images/gear-helical.jpg",
  video: "",
  link: "https://drive.google.com/file/d/1031uS1hb4PJwu7n4nBwbMkKAZoQjJZVO/view?usp=drive_link"
},

{
  id: "gear-planetary-assembly",
  title: "Planetary Gear Assembly",
  description: "Complete planetary gear system designed in SolidWorks, combining sun, ring, and planet gears in an assembly.",
  //image: "/images/gear-planetary.jpg",
  video: "",
  link: "https://drive.google.com/file/d/15qJUo1yDckvx5m78hsrIZnoaQu2XZTx2/view?usp=drive_link"
},


];

export default projects;
