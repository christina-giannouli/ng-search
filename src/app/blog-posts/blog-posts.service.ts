import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BlogPost } from './blog-post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {
  // seed data
  private postsSeed: BlogPost[] = [
    {
      data: [
        {
          type: 'articles',
          id: '1',
          attributes: {
            title: 'Search your feelings; you know it to be true!',
            body:
              "Search your feelings; you know it to be true! There is no escape! Don't make me destroy you. Luke, you do not yet realize your importance. You've only begun to discover your power! Join me, and I will compconste your training! With our combined strength, we can end this destructive conflict, and bring order to the galaxy.\n" +
              '\n',
            created: '2015-05-22T14:56:29.000Z',
            updated: '2015-05-22T14:56:28.000Z'
          },
          relationships: {
            author: {
              data: { id: '42', type: 'people' }
            }
          }
        }
      ],
      included: [
        {
          type: 'people',
          id: '42',
          attributes: {
            name: 'Luke Skywalker'
          }
        }
      ]
    },
    {
      data: [
        {
          type: 'articles',
          id: '2',
          attributes: {
            title: "I'll show you the Dark Side.",
            body: "I'll show you the Dark Side. You have too much of your father's heart in you, young Solo. The Death Star will be compconsted on schedule. Power! Unlimited power! Power! Unlimited power! Asteroids do not concern me, Admiral. You have failed me for the last time.",
            created: '2015-05-22T14:56:29.000Z',
            updated: '2015-05-22T14:56:28.000Z'
          },
          relationships: {
            author: {
              data: { id: '40', type: 'people' }
            }
          }
        }
      ],
      included: [
        {
          type: 'people',
          id: '40',
          attributes: {
            name: 'Darth Vader'
          }
        }
      ]
    },
    {
      data: [
        {
          type: 'articles',
          id: '3',
          attributes: {
            title: 'Luke, you can destroy the Emperor.',
            body: 'Luke, you can destroy the Emperor. He has foreseen this. It is your destiny! Join me, and together, we can rule the galaxy as father and son! Come with me. It is the only way I will fulfill our Destiny Luke, you can destroy the Emperor. He has foreseen this. It is your destiny! Join me, and together, we can rule the galaxy as father and son! Come with me. It is the only way',
            created: '2015-05-22T14:56:29.000Z',
            updated: '2015-05-22T14:56:28.000Z'
          },
          relationships: {
            author: {
              data: { id: '46', type: 'people' }
            }
          }
        }
      ],
      included: [
        {
          type: 'people',
          id: '46',
          attributes: {
            name: 'Han Solo'
          }
        }
      ]
    }
  ];
  private data$ = new BehaviorSubject(this.postsSeed);

  // expose Observable
  data = this.data$.asObservable();
}
