export type Photo = {
  // Photo ID (unique). It will also become the URL slug.
  id: number | string
  // Photo title
  title: string
  // Photo URL (can be absolute or relative to the public folder)
  url: string
  // Photo description
  description: string
  // External URL (View More Link)
  extURL: string
}

export const photos: Photo[] = [
  {
    id: 1,
    title: 'Project 1',
    description:
      "Project 1 stuff",
    url: '/img/project1.jpg',
    extURL: 'https://www.ewu.edu/'
  },
  {
    id: 2,
    title: 'Project 2',
    description:
      'Project 2 stuff',
    url: '/img/project2.jpg',
    extURL: 'https://www.ewu.edu/'
  },
  {
    id: 3,
    title: 'Project 3',
    description:
      'project 3 stuff',
    url: '/img/project 3.jpg',
    extURL: 'https://www.ewu.edu/'
  },
]
