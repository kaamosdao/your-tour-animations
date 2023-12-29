import { JSXFunctionSerializer, JSXMapSerializer } from '@prismicio/react';
import type { FeedbackCardDocumentDataFeedbackItem } from '@/prismicio-types';
import type * as prismic from '@prismicio/client';

enum Direction {
  Vertical = 'Vertical',
  Horizontal = 'Horizontal',
}

export enum CursorType {
  Default = 'Default',
  Pulse = 'Pulse',
  Stuck = 'Stuck',
  Text = 'Text',
  GrowDot = 'GrowDot',
}

export type StuckData = {
  left: number;
  top: number;
  width: number;
  height: number;
  borderRadius: string;
  padding: string;
};

export type CursorData = StuckData | string | null;

export enum TransitionState {
  Entering = 'entering',
  Entered = 'entered',
  Exiting = 'exiting',
  Exited = 'exited',
}

export enum ClipVar {
  TopRightX = '--cliptrX',
  TopLeftX = '--cliptlX',
  BottomRightX = '--clipbrX',
  BottomLeftX = '--clipblX',
  TopRightY = '--cliptrY',
  TopLeftY = '--cliptlY',
  BottomRightY = '--clipbrY',
  BottomLeftY = '--clipblY',
}

export type SerializerReturnType =
  | JSXFunctionSerializer
  | JSXMapSerializer
  | undefined;

export enum ModalType {
  Feedback = 'feedback',
}

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

export interface FeedbackCardData {
  name: prismic.RichTextField;
  tour: prismic.RichTextField;
  image: prismic.ImageField<never>;
  imageRetina: prismic.ImageField<never>;
  feedback: prismic.GroupField<Simplify<FeedbackCardDocumentDataFeedbackItem>>;
}

export interface ModalData extends FeedbackCardData {}

export default Direction;
