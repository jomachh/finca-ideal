export const data = {
  practices: [
    {
      id: 2,
      title: 'Aparato A',
      coverImage: require('../assets/02.png'),
      description:
        'Es una herramienta que se utiliza para hacer el trazado de las curvas a nivel en áreas productivas con pendientes.',
      materials: [
        '2 reglas o varas rectas de 2.10 metros',
        '1 regla o vara recta de 1.2 metros',
        '1 cuerda de 1.2 metros de largo',
        '1 objeto o 1 piedra que sirva de plomada o nivel pequeño',
        '3 clavos',
      ],
      questions: [
        {
          title:
            'Es una herramienta que se utiliza para hacer el trazado de las curvas a nivel en áreas productivas con pendientes',
          answers: [
            {title: 'Aparato A', isCorrect: true},
            {title: 'Nivel de manguera', isCorrect: false},
            {title: 'Aparato X', isCorrect: false},
          ],
        },
        {
          title: 'Esta esa una pregunta de prueba',
          answers: [
            {title: 'Aparato A', isCorrect: false},
            {title: 'Nivel de manguera', isCorrect: true},
            {title: 'Aparato X', isCorrect: false},
          ],
        },
      ],
    },
  ],
};
