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