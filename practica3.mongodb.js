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