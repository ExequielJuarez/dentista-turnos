// Datos del negocio. Los servicios se cargan en la base con: npm run db:instalar
// (después se leen desde la base de datos).
module.exports = {
    "nombre":  "Dental Lumina",
    "whatsapp":  "5491155552345",
    "direccion":  "Av. Santa Fe 2450, 3° B, CABA",
    "horarioTexto":  "Lun a Vie · 9 a 18 hs",
    "horario":  {
                    "diaInicio":  "08:00",
                    "diaFin":  "19:00",
                    "paso":  30,
                    "desde":  "09:00",
                    "hasta":  "18:00",
                    "diasAbiertos":  [
                                         1,
                                         2,
                                         3,
                                         4,
                                         5
                                     ]
                },
    "servicios":  [
                      {
                          "nombre":  "Consulta y diagnóstico",
                          "precio":  15000,
                          "minutos":  30,
                          "descripcion":  "Revisión completa y plan de tratamiento."
                      },
                      {
                          "nombre":  "Limpieza dental",
                          "precio":  28000,
                          "minutos":  45,
                          "descripcion":  "Profilaxis y remoción de sarro."
                      },
                      {
                          "nombre":  "Blanqueamiento",
                          "precio":  120000,
                          "minutos":  60,
                          "descripcion":  "Sonrisa más clara en una sesión."
                      },
                      {
                          "nombre":  "Ortodoncia (control)",
                          "precio":  25000,
                          "minutos":  30,
                          "descripcion":  "Seguimiento de brackets o alineadores."
                      },
                      {
                          "nombre":  "Urgencia dental",
                          "precio":  35000,
                          "minutos":  30,
                          "descripcion":  "Dolor, fractura o infección."
                      }
                  ]
};
