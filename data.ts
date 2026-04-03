import { Article } from './types';

export const INITIAL_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Global Markets React to New Economic Policies',
    excerpt: 'Major stock indices showed volatility today as investors processed the latest policy shifts from central banks.',
    content: 'The global economic landscape is shifting rapidly. Central banks around the world are adjusting their interest rate targets in response to persistent inflation and changing trade dynamics. Analysts suggest that the next few quarters will be critical for long-term stability...',
    category: 'Economics',
    author: 'Sarah Jenkins',
    date: new Date().toISOString(),
    imageUrl: 'https://picsum.photos/seed/economics/800/450',
    isFeatured: true
  },
  {
    id: '2',
    title: 'Breakthrough in Quantum Computing Research',
    excerpt: 'Researchers have achieved a new milestone in quantum coherence, bringing us closer to practical quantum computers.',
    content: 'A team of international scientists has announced a significant breakthrough in quantum computing. By utilizing a new type of superconducting material, they were able to maintain quantum coherence for record-breaking durations...',
    category: 'Tech',
    author: 'Dr. Alan Turing',
    date: new Date().toISOString(),
    imageUrl: 'https://picsum.photos/seed/tech/800/450'
  },
  {
    id: '3',
    title: 'Championship Finals: A Night to Remember',
    excerpt: 'The underdog team secured a stunning victory in the final minutes of the game, capturing the national title.',
    content: 'In what many are calling the greatest comeback in sports history, the underdogs managed to overturn a 10-point deficit in the final quarter. The atmosphere in the stadium was electric as the final whistle blew...',
    category: 'Sports',
    author: 'Mike Tyson',
    date: new Date().toISOString(),
    imageUrl: 'https://picsum.photos/seed/sports/800/450'
  }
];
