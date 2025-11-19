
db.createCollection("alumnos");
db.createCollection("eventos");
db.createCollection("plantel");
db.createCollection("escuela");
db.createCollection("profesores");

db.alumnos.insertMany([
  { nombre: "Ana", edad: 18, grupo: "1A", promedio: 9.1 },
  { nombre: "Luis", edad: 19, grupo: "1B", promedio: 8.5 },
  { nombre: "Maria", edad: 18, grupo: "1A", promedio: 9.5 },
  { nombre: "Jose", edad: 20, grupo: "2A", promedio: 7.8 },
  { nombre: "Lucia", edad: 19, grupo: "2B", promedio: 8.9 },
  { nombre: "Pablo", edad: 18, grupo: "1C", promedio: 7.5 },
  { nombre: "Diana", edad: 20, grupo: "3A", promedio: 9.7 },
  { nombre: "Rosa", edad: 21, grupo: "3B", promedio: 8.1 },
  { nombre: "Raul", edad: 19, grupo: "2A", promedio: 8.0 },
  { nombre: "Mia", edad: 18, grupo: "1A", promedio: 9.4 }
]);

db.eventos.insertMany([
  { nombre: "Feria científica", fecha: "2025-02-10", tipo: "Academico" },
  { nombre: "Concurso de canto", fecha: "2025-04-15", tipo: "Cultural" },
  { nombre: "Torneo futbol", fecha: "2025-03-20", tipo: "Deportivo" },
  { nombre: "Semana cultural", fecha: "2025-05-01", tipo: "Cultural" },
  { nombre: "Robótica", fecha: "2025-06-10", tipo: "Tecnología" },
  { nombre: "Conferencia matemáticas", fecha: "2025-02-25", tipo: "Academico" },
  { nombre: "Dia del estudiante", fecha: "2025-05-23", tipo: "General" },
  { nombre: "Exposición arte", fecha: "2025-04-10", tipo: "Cultural" },
  { nombre: "Maratón escolar", fecha: "2025-03-05", tipo: "Deportivo" },
  { nombre: "Convivencia", fecha: "2025-01-28", tipo: "General" }
]);

db.plantel.insertMany([
  { edificio: "A", salones: 12, laboratorios: 3 },
  { edificio: "B", salones: 10, laboratorios: 2 },
  { edificio: "C", salones: 8,  laboratorios: 1 },
  { edificio: "D", salones: 14, laboratorios: 3 },
  { edificio: "E", salones: 6,  laboratorios: 1 },
  { edificio: "F", salones: 9,  laboratorios: 1 },
  { edificio: "G", salones: 11, laboratorios: 2 },
  { edificio: "H", salones: 15, laboratorios: 4 },
  { edificio: "I", salones: 7,  laboratorios: 1 },
  { edificio: "J", salones: 5,  laboratorios: 1 }
]);

db.escuela.insertMany([
  { nombre: "CBTIS 01", ciudad: "México", tipo: "Pública" },
  { nombre: "CONALEP 02", ciudad: "Guadalajara", tipo: "Pública" },
  { nombre: "Instituto Alfa", ciudad: "Monterrey", tipo: "Privada" },
  { nombre: "Colegio Beta", ciudad: "Puebla", tipo: "Privada" },
  { nombre: "CECyT 118", ciudad: "Queretaro", tipo: "Pública" },
  { nombre: "CBTIS 04", ciudad: "León", tipo: "Pública" },
  { nombre: "Tecnológico Gamma", ciudad: "Querétaro", tipo: "Privada" },
  { nombre: "Colegio Delta", ciudad: "Mérida", tipo: "Privada" },
  { nombre: "CECyT 05", ciudad: "Tijuana", tipo: "Pública" },
  { nombre: "CBTIS 06", ciudad: "Chihuahua", tipo: "Pública" }
]);

db.profesores.insertMany([
  { nombre: "Carlos", materia: "Matemáticas", antiguedad: 5 },
  { nombre: "Sofia", materia: "Historia", antiguedad: 3 },
  { nombre: "Miguel", materia: "Física", antiguedad: 7 },
  { nombre: "Laura", materia: "Biología", antiguedad: 2 },
  { nombre: "Andres", materia: "Química", antiguedad: 4 },
  { nombre: "Elena", materia: "Literatura", antiguedad: 6 },
  { nombre: "Jorge", materia: "Inglés", antiguedad: 8 },
  { nombre: "Patricia", materia: "Programación", antiguedad: 3 },
  { nombre: "Ricardo", materia: "Matemáticas", antiguedad: 10 },
  { nombre: "Tania", materia: "Artes", antiguedad: 1 }
]);

// Eliminar en alumnos
db.alumnos.deleteOne({ nombre: "Ana" });
db.alumnos.deleteOne({ nombre: "Luis" });

// Eliminar en eventos
db.eventos.deleteOne({ tipo: "Cultural" });
db.eventos.deleteOne({ tipo: "Deportivo" });

// Eliminar en plantel
db.plantel.deleteOne({ edificio: "A" });
db.plantel.deleteOne({ edificio: "B" });

// Eliminar en escuela
db.escuela.deleteOne({ nombre: "CBTIS 01" });
db.escuela.deleteOne({ nombre: "CONALEP 02" });

// Eliminar en profesores
db.profesores.deleteOne({ nombre: "Carlos" });
db.profesores.deleteOne({ nombre: "Sofia" });

// alumnos
db.alumnos.updateOne({ nombre: "Maria" }, { $set: { promedio: 10 } });
db.alumnos.updateOne({ nombre: "Jose" }, { $set: { grupo: "2C" } });

// eventos
db.eventos.updateOne({ nombre: "Feria científica" }, { $set: { tipo: "Tecnología" } });
db.eventos.updateOne({ nombre: "Robótica" }, { $set: { tipo: "Academico" } });

// plantel
db.plantel.updateOne({ edificio: "C" }, { $set: { salones: 20 } });
db.plantel.updateOne({ edificio: "D" }, { $set: { laboratorios: 5 } });

// escuela
db.escuela.updateOne({ nombre: "Instituto Alfa" }, { $set: { tipo: "Pública" } });
db.escuela.updateOne({ nombre: "Colegio Beta" }, { $set: { ciudad: "CDMX" } });

// profesores
db.profesores.updateOne({ nombre: "Miguel" }, { $set: { antiguedad: 10 } });
db.profesores.updateOne({ nombre: "Laura" }, { $set: { materia: "Ciencias" } });

db.alumnos.find({ edad: 18 });
db.alumnos.find({ grupo: "1A" });
db.alumnos.find({ promedio: { $gt: 9 } });
db.alumnos.find({ promedio: { $lt: 8 } });
db.alumnos.find({ edad: { $gte: 20 } });
db.alumnos.find({ nombre: /^M/ });
db.alumnos.find({ grupo: { $in: ["1A","1B"] } });
db.alumnos.find({ promedio: { $gte: 8, $lte: 9 } });
db.alumnos.find({ nombre: "Pablo" });
db.alumnos.find().sort({ promedio: -1 });

db.eventos.find({ tipo: "Cultural" });
db.eventos.find({ tipo: "Academico" });
db.eventos.find({ fecha: { $gt: "2025-04-01" } });
db.eventos.find({ fecha: { $lt: "2025-03-01" } });
db.eventos.find({ nombre: /^C/ });
db.eventos.find({ tipo: { $in: ["Deportivo","General"] } });
db.eventos.find({ nombre: /concurso/i });
db.eventos.find().sort({ fecha: 1 });
db.eventos.find().sort({ fecha: -1 });
db.eventos.find({ nombre: "Robótica" });

db.plantel.find({ salones: { $gt: 10 } });
db.plantel.find({ salones: { $lt: 8 } });
db.plantel.find({ laboratorios: 3 });
db.plantel.find({ edificio: /^A/ });
db.plantel.find({ laboratorios: { $gte: 2 } });
db.plantel.find().limit(5);
db.plantel.find().sort({ salones: -1 });
db.plantel.find().sort({ laboratorios: 1 });
db.plantel.find({ edificio: { $in: ["C","D","E"] } });
db.plantel.find({ salones: { $gte: 10, $lte: 15 } });

db.escuela.find({ tipo: "Pública" });
db.escuela.find({ tipo: "Privada" });
db.escuela.find({ ciudad: "México" });
db.escuela.find({ ciudad: /^M/ });
db.escuela.find({ nombre: /CBTIS/ });
db.escuela.find({ nombre: /^C/ });
db.escuela.find().sort({ ciudad: 1 });
db.escuela.find().sort({ nombre: -1 });
db.escuela.find({ ciudad: { $in: ["Puebla","León"] } });
db.escuela.find({ tipo: "Pública", ciudad: "Toluca" });

db.profesores.find({ materia: "Matemáticas" });
db.profesores.find({ antiguedad: { $gt: 5 } });
db.profesores.find({ antiguedad: { $lt: 3 } });
db.profesores.find({ nombre: /^L/ });
db.profesores.find({ materia: /i/ });
db.profesores.find().sort({ antiguedad: -1 });
db.profesores.find().sort({ nombre: 1 });
db.profesores.find({ materia: { $in: ["Física","Química"] } });
db.profesores.find({ antiguedad: { $gte: 4, $lte: 8 } });
db.profesores.find({ nombre: "Ricardo" });
