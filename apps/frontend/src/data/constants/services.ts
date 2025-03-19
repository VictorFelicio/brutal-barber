import { Service } from '@brutalbarber/core';

export const services: Service[] = [
    {
        id: 1,
        name: 'Corte Viking',
        description:
            'Venha receber um corte de Viking, com lâmina na pele e estilo de guerreiro. Saia pronto para enfrentar qualquer batalha com um visual que impõe respeito.',
        price: 55,
        qtySlots: 3,
        imageURL: '/services/corte-de-cabelo.jpg',
    },
    {
        id: 2,
        name: 'Barba de Lenhador',
        description:
            'Venha dar um trato na sua barba de lenhador, com aparo preciso e estilo de macho raiz. Saia com uma barba que impõe respeito e faz tremer até as árvores.',
        price: 45,
        qtySlots: 2,
        imageURL: '/services/corte-de-barba.jpg',
    },
    {
        id: 3,
        name: 'Garras Brutais',
        description:
            'Venha transformar suas patas de urso em garras de lobo. Nosso serviço de Manicure & Pedicure para homens é tão bruto quanto você, mas com um toque de classe.',
        price: 40,
        qtySlots: 2,
        imageURL: '/services/manicure-pedicure.jpg',
    },
    {
        id: 4,
        name: 'Combo Alpha',
        description:
            'Nosso combo "Alpha" inclui um corte de cabelo de Viking, uma barba de lenhador e manicure & pedicure de gladiador. Saia pronto para enfrentar qualquer batalha com estilo e unhas afiadas.',
        price: 95,
        qtySlots: 2,
        imageURL: '/services/combo.jpg',
    },
    {
        id: 5,
        name: 'Pequeno Caçador',
        description:
            'Transforme seu pequeno aventureiro em um mini caçador, com um corte cheio de atitude e estilo. Cabelo afiado como uma guitarra e maneiro como uma Harley.',
        price: 60,
        qtySlots: 2,
        imageURL: '/services/corte-infantil.jpg',
    },
    {
        id: 6,
        name: 'Noivo Raiz',
        description:
            'Prepare-se para o grande dia com um tratamento digno de um verdadeiro guerreiro da estrada. Corte de cabelo afiado, barba de lenhador e manicure de motoqueiro, tudo enquanto você relaxa ao som de rock pesado.',
        price: 189,
        qtySlots: 5,
        imageURL: '/services/dia-de-noivo.jpg',
    },
];
