export interface IExperienceItem {
  job: string;
  jobTitle?: string;
  startDate?: string;
  endDate?: string;
  responsibilities: string[];
  link?: string;
  stacks?: string[];
}

export const experienceList: IExperienceItem[] = [
  {
    job: 'Bawaga',
    jobTitle: 'Frontend developer',
    startDate: '01.2023',
    endDate: 'Present',
    responsibilities: ['implementation', 'integration with the backend', 'displaying analytical data'],
  },
  {
    job: 'Yandex.Practicum',
    jobTitle: 'Mentor',
    startDate: '11.2022',
    endDate: 'Present',
    responsibilities: ['planning', 'management', 'conduct code reviews', 'webinar'],
  },
];
