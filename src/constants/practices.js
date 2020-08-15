export const data = {
  practices: [
    {
      id: 1,
      title: 'Plan de Manejo sostenible de finca',
      coverImage: require('../assets/02.png'),
      description:
        'Es una herramienta de planificación y ordenamiento de fincas, parcelas o patios que permite proyectar acciones ambientales y económicas acordes a las potencialidades identificadas en las fincas, parcelas o patios. El plan hace pensar en el futuro y lo más importante en cómo alcanzarlo, a través de metas concretas.\nPasos para elaborar el Plan de la Finca:\n1. Dibujo de la finca: Con sus linderos, lotes, obras de conservación (si hay), fuentes de agua, infraestructura (casa, beneficio, letrina), otros aspectos importantes, limitantes o problemas ambientales que existen.\n2. Descripción de cada lote o parcela de la finca, cultivo existentes actualmente, topografía, pedregosidad, fertilidad, drenaje.\n3. Descripción de las limitantes y Soluciones.\n4. Calcular los costos actuales y los beneficios de los cultivos o rubros de la finca.\n5. Plantear las soluciones a las limitantes encontradas para cada lote.\n6. Idetificar los beneficios de las soluciones planteadas.\n7. Mapa de uso futuro.\n8. Proyección de beneficios de las soluciones planteadas.\n9. Cronograma de actividades para el primer año.',
      materials: ['Libreta', 'Lápiz', 'Papelones', 'Cinta métrica', 'Nivel'],
      questions: [
        {
          title: 'El plan de finca es un instrumento que sirva para:',
          answers: [
            {title: 'Sacar créditos', isCorrect: false},
            {
              title:
                'Ordenar y planificar las acciones en las unidades de producción.',
              isCorrect: true,
            },
            {title: 'Llevar registros', isCorrect: false},
            {title: 'Todas las anteriores', isCorrect: false},
          ],
        },
      ],
    },
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
        {
          title: 'Esta esa otra pregunta de prueba',
          answers: [
            {title: 'Aparato A', isCorrect: false},
            {title: 'Nivel de manguera', isCorrect: true},
            {title: 'Aparato X', isCorrect: false},
            {title: 'Aparato Y', isCorrect: false},
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Barreras muertas',
      coverImage: require('../assets/02.png'),
      description:
        'Las barreras muertas son muros de piedras o de rastrojos, colocados conforme a las curvas a nivel y sirven para disminuir la velocidad del agua de escorrentía y evitar la erosión de los suelos; esta buena práctica facilita la infiltración del agua de lluvia y del terreno y del tipo de suelo. Deben utilizarse en terrenos en donde exista material inerte para tales fines como: Rocas, Piedras, hojas y tallos de bananos, Troncos, ramas, árboles, y restos y cosecha.',
      materials: [
        'Nivel tipo A',
        'Palas',
        'Piochas',
        'Machetes',
        'Carretillas',
        'Piedras',
        'Pajas',
        'Tallos de guineos',
        'Sacos',
        'Trozos de palo',
      ],
      questions: [
        {
          title:
            'Se construyen de piedra sobre la curva a nivel y sirve para reducir la erosión en el suelo',
          answers: [
            {title: 'Cercos de piedra', isCorrect: false},
            {title: 'Muros de contención', isCorrect: false},
            {title: 'Barrera muerta', isCorrect: true},
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Barreras vivas',
      coverImage: require('../assets/02.png'),
      description:
        'Barreras vivas son hileras de plantas perennes o semi- perennes con crecimiento denso sembradas perpendiculares a la pendiente, en combinación con algunas obras de conservación de suelos como acequias de ladera Estas obras tienen como principal función disminuir la pérdida de Suelo debido a que interceptan el agua de lluvia reduciendo su velocidad.',
      materials: [
        'ZONA SECA',
        '- Piña',
        '- Taiwán',
        '- Ajonjolí',
        'ZONA HUMEDA',
        '- Gandul y valeriana',
        '- Taiwán',
        '- Árboles forestales de baja altura o frutales',
        '- Platas',
        '- Pacaya',
        '- Leguminosas y otros',
      ],
      questions: [
        {
          title:
            'Los materiales para hacer las barreras vivas que sirven para disminuir la perdida de suelo son:',
          answers: [
            {title: 'Alambre de púa, postes.', isCorrect: false},
            {title: 'Piña, Taiwán, gandul, valeriana.', isCorrect: true},
            {title: 'Piedras.', isCorrect: false},
          ],
        },
      ],
    },
    {
      id: 5,
      title: 'Fosas de infiltración',
      coverImage: require('../assets/02.png'),
      description:
        'La zanja de infiltración es una excavación en el terreno, que se establece en zonas de baja precipitación para acumular el agua de lluvia, permitiendo una mayor infiltración de ésta en el perfil del suelo y proporcionando humedad a las plantas establecidas en los bordes de ellas, en periodos de lluvias escasas.',
      materials: [
        'Los materiales requeridos para su establecimiento, son un nivel tipo A, para el trazado de la línea de ubicación de ellas, palas y picos, lienza y estacas para trazar la zanja.',
      ],
      questions: [
        {
          title:
            'Su función es recolectar el agua de lluvia en un lugar de la parcela para que haya mayor infiltración.',
          answers: [
            {title: 'Pila.', isCorrect: false},
            {title: 'Tanque de almacenamiento.', isCorrect: false},
            {title: 'Fosas de infiltración.', isCorrect: true},
            {title: 'Ninguna de las anteriores.', isCorrect: false},
          ],
        },
      ],
    },
    {
      id: 6,
      title: 'Lombricultura, lombricompuesto, lombrihumus o humus de lombriz',
      coverImage: require('../assets/02.png'),
      description:
        'Es una tecnología basada en la cría intensiva de lombrices para la producción de humus (Se llama humus a la materia orgánica degradada a su último estado de descomposición por efecto de microorganismos) a partir de un sustrato orgánico. Es un proceso de descomposición natural, similar al compostaje, en el que el material orgánico, además de ser atacado por los microorganismos (hongos, bacterias, actinomicetos, levaduras, etc.) existentes en el medio natural, también lo es por el complejo sistema digestivo de la lombriz.',
      materials: [
        '1 kilo de lombriz por cada metro cuadrado de material Los desperdicios orgánicos de la casa y de la finca ( estiércol de vaca, conejos, caballos o cabras).',
        'Los Bancos de 1.2m a 1.6m de ancho.',
        'Tablas o ladrillos de barro de una altura de 40cm.',
        'Agua sin clorar.',
        'Regadera.',
        'Zaranda.',
        'Sacos (para la recolección de la cosecha).',
      ],
      questions: [
        {
          title:
            'Es un proceso de descomposición natural, en el que el material orgánico, es descompuesto por el complejo sistema digestivo de la lombriz.',
          answers: [
            {title: 'Compostaje.', isCorrect: false},
            {title: 'Biofertilizantes.', isCorrect: false},
            {title: 'Lombricultura.', isCorrect: true},
            {title: 'Todas las anteriores.', isCorrect: false},
          ],
        },
      ],
    },
    {
      id: 7,
      title: 'Cortinas Rompe viento',
      coverImage: require('../assets/02.png'),
      description:
        'Son hileras de árboles o arbustos de diferentes alturas que forman una barrera y constituyen un obstáculo , opuesta a la dirección predominante del viento, Se conocen también como barreras rompevientos, setos vivos o fajas de albergue, por refugiar a cierto tipo de fauna.',
      materials: [
        'Especies como el sacue llorón, sauce tropical. Cedro blanco Cedro, Pino, Encino rojo entre otros (esto cuando se establecerá cortinas vivas.)',
        'Mallas plásticas',
        'Cañas secas',
        'Paredes entre otras (cuando establecerás cortinas artificiales.)',
        'Pala',
        'Azadón o herramientas similares.',
      ],
      questions: [
        {
          title:
            'Son hileras de árboles o arbustos de diferentes alturas que forman una barrera y constituyen un obstáculo , opuesta a la dirección predominante del viento:',
          answers: [
            {title: 'Barrera viva.', isCorrect: false},
            {title: 'Cortina rompe vientos.', isCorrect: true},
            {title: 'Barrera muerta', isCorrect: false},
            {title: 'Ninguna de las anteriores.', isCorrect: false},
          ],
        },
      ],
    },
    {
      id: 8,
      title: 'Biointensivos',
      coverImage: require('../assets/02.png'),
      description:
        'Método de Cultivo Biointensivo es un método de agricultura ecológica sustentable de pequeña escala enfocado al autoconsumo y a la mini- comercialización. Aprovecha la naturaleza para obtener altos rendimientos de producción en poco espacio con un bajo consumo de agua, Utilizando semillas criollas y solamente unos pocos fertilizantes orgánicos, el método es casi totalmente sustentable .Se basa en varios principios que pueden ser adaptados a cualquier clima e implementados con técnicas realizadas a mano usando herramientas sencillas. El resultado es una agricultura ecológica que no solo produce alimentos nutritivos y orgánicos, sino también reconstruye y mejora la fertilidad del suelo. El método brinda una solución a la seguridad alimentaria familiar y a la soberanía alimentaria frente a los grandes problemas que amenazan a los pueblos de todo el mundo, la contaminación y destrucción del medioambiente, el agotamiento de los recursos naturales, la dependencia de los combustibles fósiles y el cambio climático. Con este énfasis, el método se ha desarrollado para poder cultivar todos los alimentos para una dieta completa y nutritiva en el espacio más reducido posible. Esta práctica está basada en los siguientes principios.',
      materials: [
        'Cordón, mecate o estambre.',
        'Cinta métrica.',
        'Estacas de madera.',
        'Herramientas de jardinería (pala, bieldo, azadón etc.)',
        'Manguera o cubetas de 20 litros.',
        'Agua.',
        'Tabla de madera de aproximadamente 1.50 x 1 metro.',
      ],
      questions: [
        {
          title:
            'Método de agricultura ecológica sustentable de pequeña escala enfocado al autoconsumo y a la mini- comercialización:',
          answers: [
            {title: 'Bancos productivos.', isCorrect: false},
            {title: 'Cultivos en callejón.', isCorrect: false},
            {title: 'Bio intensivos', isCorrect: true},
            {title: 'Todas las anteriores.', isCorrect: false},
          ],
        },
        {
          title: 'Los beneficiones de este método son:',
          answers: [
            {
              title: 'Optimización del uso de áreas pequeñas.',
              isCorrect: false,
            },
            {title: 'Producción de alimentos sanos.', isCorrect: false},
            {title: 'Se adapta a cualquier clima y región.', isCorrect: false},
            {title: 'Todas las anteriores.', isCorrect: true},
          ],
        },
      ],
    },
    {
      id: 9,
      title: 'Cercas vivas',
      coverImage: require('../assets/02.png'),
      description:
        'Consiste en sembrar líneas de árboles o arbustos como soporte para el alambre de púas o liso siguiendo los límites de una propiedad o marcando los límites de unas parcelas según los diferentes usos del suelo (cultivos anuales, perennes, potreros, bosques) puede estar formado solamente de especies leñosas o de una combinación de especies leñosas con postes muertos.',
      materials: [
        'Existen diversos materiales para realizar cercas vivas dentro de una plantación o área de siembra preferiblemente material vegetativo que sea apto para las zonas donde se establecerá, esto dependerá del área del tipo de cerca que va a establecer.',
        'Materiales:',
        'Postes muertos',
        'Alambre de púas (rollos)',
        'Grapas (libras)',
        'Plantas frutales',
        'Plantas medicinales',
        'Plantas maderables',
        'Material vegetativo:',
        'Gandul',
        'Flor de avispas',
        'Jicote',
        'Sauco',
        'Venadillo',
        'Cítrico',
        'Pochote',
        'Indio desnudo',
      ],
      questions: [
        {
          title:
            'Consiste en sembrar árboles o prendedizos que permiten delimitar las áreas incrementando la vegetación y reduciendo la deforestación para leña y postes.',
          answers: [
            {title: 'Reforestación', isCorrect: false},
            {title: 'Cercas vivas', isCorrect: true},
            {title: 'Ninguna de las anteriores', isCorrect: false},
          ],
        },
      ],
    },
    {
      id: 10,
      title: 'Regeneración Natural',
      coverImage: require('../assets/02.png'),
      description:
        'Regeneración natural es igual a como su nombre lo dice es un proceso natural mediante el cual una área desnuda vuelve a poblarse de árboles en un proceso conocido como sucesión vegetal o le podemos llamar recuperación del bosque.',
      materials: [
        'Semillas',
        'Hijos',
        'Brotes',
        'Tubérculos o raíces que germinan y se desarrollan a través de acciones donde interviene el viento, el agua y animales (aves y mamíferos) que depositan semillas y en este trayecto son los responsables de la regeneración natural.',
      ],
      questions: [
        {
          title:
            'Es un proceso natural mediante el cual una área desnuda vuelve a poblarse de árboles en un proceso conocido como sucesión vegetal:',
          answers: [
            {title: 'Regeneración natural.', isCorrect: true},
            {title: 'Áreas protegidas.', isCorrect: false},
            {title: 'Zona en descanso.', isCorrect: false},
          ],
        },
      ],
    },
    {
      id: 11,
      title: 'Cosecha de agua',
      coverImage: require('../assets/02.png'),
      description:
        'La cosecha de agua se define como la recolección del vital líquido derivado de las lluvias para usarlo con fines productivos. ... El uso de agua de lluvia para cubrir las necesidades de producción agrícola es una estrategia que se ha practicado desde hace miles de años, especialmente en zonas rurales.',
      materials: [],
      questions: [
        {
          title:
            'La recolección de agua de lluvia bajo diferentes formas que permite su utilización en actividades domésticas y agrícolas se define como:',
          answers: [
            {title: 'Almacenamiento.', isCorrect: false},
            {title: 'Captación.', isCorrect: false},
            {title: 'Cosecha de agua.', isCorrect: true},
          ],
        },
      ],
    },
    {
      id: 12,
      title: 'Zanjas de drenaje',
      coverImage: require('../assets/02.png'),
      description:
        'Se definen como zanjas que acompañan a un buen drenaje o drenaje dirigido, usualmente se busca la mejor pendiente para realizar estas zanjas ( curvas a desnivel), se ubican en aquellas área donde está concentrada la mayor parte de volumen pluvial a la hora de una lluvia fuerte.',
      materials: [
        'Aparato “A”',
        'Cinta métrica',
        'Pala',
        'Piocha',
        'Coba o palin',
      ],
      questions: [
        {
          title:
            'Para drenar áreas donde se almacenan el agua en cantidades que interrumpen las labores agrícolas se construyen:',
          answers: [
            {title: 'Sistemas de riego.', isCorrect: false},
            {title: 'Zanjas de drenaje.', isCorrect: true},
            {title: 'Canales de conducción.', isCorrect: false},
          ],
        },
      ],
    },
    {
      id: 13,
      title: 'Reforestación',
      coverImage: require('../assets/02.png'),
      description:
        'Se define como la acción de sembrar árboles en áreas de importancia ambiental o de vocación forestal, como fuentes de agua, zonas con altas pendientes con el objetivo de restablecer la cobertura vegetal o para fines comerciales (leña o madera).',
      materials: ['Plantas', 'Barra', 'Coba', 'Palin'],
      questions: [
        {
          title:
            'Para restablecer la cobertura vegetal en áreas de importancia ambiental se realiza:',
          answers: [
            {title: 'Cercas vivas.', isCorrect: false},
            {title: 'Cercos de protección.', isCorrect: false},
            {title: 'Reforestación.', isCorrect: true},
          ],
        },
      ],
    },
    {
      id: 14,
      title: 'Plantas frutales',
      coverImage: require('../assets/02.png'),
      description:
        'Son especies de valor nutritivo y comercial que se utilizan para diversificar la producción de las unidades de producción.',
      materials: ['Plantas frutales nativas o injertas'],
      questions: [
        {
          title:
            'Con su establecimiento permiten diversificar la producción y mejorar los ingresos de la familia:',
          answers: [
            {title: 'Cultivos anuales.', isCorrect: false},
            {title: 'Cortina rompe viento.', isCorrect: false},
            {title: 'Plantas frutales', isCorrect: true},
          ],
        },
      ],
    },
    {
      id: 15,
      title: 'Acequias o zanjas de infiltración.',
      coverImage: require('../assets/02.png'),
      description:
        'Son canales que se construyen a nivel, en dirección transversal a la pendiente, para retener, conservar y ayudar a infiltrar el agua de lluvia que cae sobre las laderas. Por esta razón se recomiendan para zonas con baja precipitación lluviosa: trópico seco y sub trópico seco.',
      materials: ['Aparato “A”', 'Cinta métrica', 'Piocha', 'Palin', 'Pala'],
      questions: [
        {
          title:
            'Se construyen a nivel, en dirección transversal a la pendiente, para retener, conservar y ayudar a infiltrar el agua de lluvia que cae sobre las laderas.',
          answers: [
            {title: 'Acequias.', isCorrect: true},
            {title: 'Canales de riego.', isCorrect: false},
            {title: 'A y b son verdaderas.', isCorrect: false},
          ],
        },
      ],
    },
  ],
};
