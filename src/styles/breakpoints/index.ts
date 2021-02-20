import { generateMedia } from 'styled-media-query';

interface Breakpoints {
  minimal: string;
  iphoneSe: string;
  phone: string;
  tablet: string;
  laptop: string;
  desktop: string;
  fullsize: string;
}

const media = generateMedia<Breakpoints>({
  minimal: '285px',
  iphoneSe: '325px',
  phone: '440px',
  tablet: '600px',
  laptop: '885px',
  desktop: '925px',
  fullsize: '1060px',
});

export default media;
