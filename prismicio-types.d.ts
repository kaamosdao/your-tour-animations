// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice = ChooseTourSlice | DescriptionSlice;

/**
 * Content for HomePage documents
 */
interface HomepageDocumentData {
  /**
   * Title field in *HomePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *HomePage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>
  /**
   * Meta Title field in *HomePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *HomePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *HomePage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * HomePage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    'homepage',
    Lang
  >;

type PageDocumentDataSlicesSlice = DescriptionSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>
  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, 'page', Lang>;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;

  /**
   * Phone number field in *Settings*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.phone_number
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  phone_number: prismic.NumberField;

  /**
   * Phone label field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.phone_label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone_label: prismic.KeyTextField;

  /**
   * Instagram field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.instagram
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  instagram: prismic.LinkField;

  /**
   * Facebook field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.facebook
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  facebook: prismic.LinkField;

  /**
   * Vkontakte field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.vkontakte
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  vkontakte: prismic.LinkField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    'settings',
    Lang
  >;

/**
 * Item in *Tours → Cards*
 */
export interface ToursDocumentDataCardsItem {
  /**
   * Image field in *Tours → Cards*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: tours.cards[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Image2x field in *Tours → Cards*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: tours.cards[].image2x
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image2x: prismic.ImageField<never>;

  /**
   * Title field in *Tours → Cards*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: tours.cards[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Price field in *Tours → Cards*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tours.cards[].price
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  price: prismic.RichTextField;

  /**
   * Link field in *Tours → Cards*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: tours.cards[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Tours documents
 */
interface ToursDocumentData {
  /**
   * Name field in *Tours*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tours.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * IsCurrent field in *Tours*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: tours.iscurrent
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  iscurrent: prismic.BooleanField;

  /**
   * Cards field in *Tours*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: tours.cards[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  cards: prismic.GroupField<Simplify<ToursDocumentDataCardsItem>>;
}

/**
 * Tours document from Prismic
 *
 * - **API ID**: `tours`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ToursDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<ToursDocumentData>, 'tours', Lang>;

export type AllDocumentTypes =
  | HomepageDocument
  | PageDocument
  | SettingsDocument
  | ToursDocument;

/**
 * Primary content in *ChooseTour → Primary*
 */
export interface ChooseTourSliceDefaultPrimary {
  /**
   * Title field in *ChooseTour → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: choose_tour.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;
}

/**
 * Primary content in *ChooseTour → Items*
 */
export interface ChooseTourSliceDefaultItem {
  /**
   * Tours field in *ChooseTour → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: choose_tour.items[].tours
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  tours: prismic.ContentRelationshipField<'tours'>;
}

/**
 * Default variation for ChooseTour Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ChooseTourSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ChooseTourSliceDefaultPrimary>,
  Simplify<ChooseTourSliceDefaultItem>
>;

/**
 * Slice variation for *ChooseTour*
 */
type ChooseTourSliceVariation = ChooseTourSliceDefault;

/**
 * ChooseTour Shared Slice
 *
 * - **API ID**: `choose_tour`
 * - **Description**: ChooseTour
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ChooseTourSlice = prismic.SharedSlice<
  'choose_tour',
  ChooseTourSliceVariation
>;

/**
 * Primary content in *Description → Primary*
 */
export interface DescriptionSliceDefaultPrimary {
  /**
   * Title field in *Description → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: description.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Description field in *Description → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: description.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Button field in *Description → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: description.primary.button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.LinkField;

  /**
   * Button label field in *Description → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: description.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;
}

/**
 * Default variation for Description Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DescriptionSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<DescriptionSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Description → Primary*
 */
export interface DescriptionSliceWithoutButtonPrimary {
  /**
   * Title field in *Description → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: description.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Description 1 field in *Description → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: description.primary.description_1
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description_1: prismic.RichTextField;

  /**
   * Description 2 field in *Description → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: description.primary.description_2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description_2: prismic.RichTextField;

  /**
   * Description 3 field in *Description → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: description.primary.description_3
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description_3: prismic.RichTextField;
}

/**
 * Without button variation for Description Slice
 *
 * - **API ID**: `withoutButton`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DescriptionSliceWithoutButton = prismic.SharedSliceVariation<
  'withoutButton',
  Simplify<DescriptionSliceWithoutButtonPrimary>,
  never
>;

/**
 * Slice variation for *Description*
 */
type DescriptionSliceVariation =
  | DescriptionSliceDefault
  | DescriptionSliceWithoutButton;

/**
 * Description Shared Slice
 *
 * - **API ID**: `description`
 * - **Description**: Description
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DescriptionSlice = prismic.SharedSlice<
  'description',
  DescriptionSliceVariation
>;

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      ToursDocument,
      ToursDocumentData,
      ToursDocumentDataCardsItem,
      AllDocumentTypes,
      ChooseTourSlice,
      ChooseTourSliceDefaultPrimary,
      ChooseTourSliceDefaultItem,
      ChooseTourSliceVariation,
      ChooseTourSliceDefault,
      DescriptionSlice,
      DescriptionSliceDefaultPrimary,
      DescriptionSliceWithoutButtonPrimary,
      DescriptionSliceVariation,
      DescriptionSliceDefault,
      DescriptionSliceWithoutButton,
    };
  }
}
