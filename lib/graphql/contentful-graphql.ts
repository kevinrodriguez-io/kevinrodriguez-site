import { GraphQLClient } from 'graphql-request'
import { print } from 'graphql'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type Query = {
  __typename?: 'Query'
  asset?: Maybe<Asset>
  assetCollection?: Maybe<AssetCollection>
  resume?: Maybe<Resume>
  resumeCollection?: Maybe<ResumeCollection>
  landing?: Maybe<Landing>
  landingCollection?: Maybe<LandingCollection>
  openSourceProject?: Maybe<OpenSourceProject>
  openSourceProjectCollection?: Maybe<OpenSourceProjectCollection>
  project?: Maybe<Project>
  projectCollection?: Maybe<ProjectCollection>
  resumeOtherStudies?: Maybe<ResumeOtherStudies>
  resumeOtherStudiesCollection?: Maybe<ResumeOtherStudiesCollection>
  formalStudy?: Maybe<FormalStudy>
  formalStudyCollection?: Maybe<FormalStudyCollection>
  previousWork?: Maybe<PreviousWork>
  previousWorkCollection?: Maybe<PreviousWorkCollection>
  awards?: Maybe<Awards>
  awardsCollection?: Maybe<AwardsCollection>
  availableTechnology?: Maybe<AvailableTechnology>
  availableTechnologyCollection?: Maybe<AvailableTechnologyCollection>
}

export type QueryAssetArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryAssetCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<AssetFilter>
  order?: Maybe<Array<Maybe<AssetOrder>>>
}

export type QueryResumeArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryResumeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<ResumeFilter>
  order?: Maybe<Array<Maybe<ResumeOrder>>>
}

export type QueryLandingArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryLandingCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<LandingFilter>
  order?: Maybe<Array<Maybe<LandingOrder>>>
}

export type QueryOpenSourceProjectArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryOpenSourceProjectCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<OpenSourceProjectFilter>
  order?: Maybe<Array<Maybe<OpenSourceProjectOrder>>>
}

export type QueryProjectArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryProjectCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<ProjectFilter>
  order?: Maybe<Array<Maybe<ProjectOrder>>>
}

export type QueryResumeOtherStudiesArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryResumeOtherStudiesCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<ResumeOtherStudiesFilter>
  order?: Maybe<Array<Maybe<ResumeOtherStudiesOrder>>>
}

export type QueryFormalStudyArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryFormalStudyCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<FormalStudyFilter>
  order?: Maybe<Array<Maybe<FormalStudyOrder>>>
}

export type QueryPreviousWorkArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryPreviousWorkCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<PreviousWorkFilter>
  order?: Maybe<Array<Maybe<PreviousWorkOrder>>>
}

export type QueryAwardsArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryAwardsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<AwardsFilter>
  order?: Maybe<Array<Maybe<AwardsOrder>>>
}

export type QueryAvailableTechnologyArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryAvailableTechnologyCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<AvailableTechnologyFilter>
  order?: Maybe<Array<Maybe<AvailableTechnologyOrder>>>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset'
  sys: Sys
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  contentType?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Int']>
  url?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  linkedFrom?: Maybe<AssetLinkingCollections>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: Maybe<ImageTransformOptions>
}

export type Sys = {
  __typename?: 'Sys'
  id: Scalars['String']
  spaceId: Scalars['String']
  environmentId: Scalars['String']
  publishedAt?: Maybe<Scalars['DateTime']>
  firstPublishedAt?: Maybe<Scalars['DateTime']>
  publishedVersion?: Maybe<Scalars['Int']>
}

export type ImageTransformOptions = {
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars['Dimension']>
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars['Dimension']>
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars['Quality']>
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars['Int']>
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<ImageResizeStrategy>
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<ImageResizeFocus>
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars['HexColor']>
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<ImageFormat>
}

export enum ImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB',
}

export enum ImageResizeFocus {
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
}

export enum ImageFormat {
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP',
}

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  resumeCollection?: Maybe<ResumeCollection>
  landingCollection?: Maybe<LandingCollection>
  openSourceProjectCollection?: Maybe<OpenSourceProjectCollection>
  projectCollection?: Maybe<ProjectCollection>
  formalStudyCollection?: Maybe<FormalStudyCollection>
  awardsCollection?: Maybe<AwardsCollection>
  availableTechnologyCollection?: Maybe<AvailableTechnologyCollection>
}

export type AssetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type AssetLinkingCollectionsResumeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type AssetLinkingCollectionsLandingCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type AssetLinkingCollectionsOpenSourceProjectCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type AssetLinkingCollectionsProjectCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type AssetLinkingCollectionsFormalStudyCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type AssetLinkingCollectionsAwardsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type AssetLinkingCollectionsAvailableTechnologyCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type EntryCollection = {
  __typename?: 'EntryCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Entry>>
}

export type Entry = {
  sys: Sys
}

export type ResumeCollection = {
  __typename?: 'ResumeCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Resume>>
}

/** Resume page [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/resume) */
export type Resume = Entry & {
  __typename?: 'Resume'
  sys: Sys
  linkedFrom?: Maybe<ResumeLinkingCollections>
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  profilePicture?: Maybe<Asset>
  featuredImage?: Maybe<Asset>
  aboutMe?: Maybe<ResumeAboutMe>
  previousWorkImage?: Maybe<Asset>
  previousWorkCollection?: Maybe<ResumePreviousWorkCollection>
  availableTechnologiesImage?: Maybe<Asset>
  availableTechnologiesCollection?: Maybe<ResumeAvailableTechnologiesCollection>
  projectsCollection?: Maybe<ResumeProjectsCollection>
  openSourceProjectsCollection?: Maybe<ResumeOpenSourceProjectsCollection>
  studiesImage?: Maybe<Asset>
  studiesCollection?: Maybe<ResumeStudiesCollection>
  otherStudiesImage?: Maybe<Asset>
  otherStudiesCollection?: Maybe<ResumeOtherStudiesCollection>
}

/** Resume page [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/resume) */
export type ResumeProfilePictureArgs = {
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

/** Resume page [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/resume) */
export type ResumeFeaturedImageArgs = {
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

/** Resume page [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/resume) */
export type ResumePreviousWorkImageArgs = {
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

/** Resume page [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/resume) */
export type ResumePreviousWorkCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

/** Resume page [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/resume) */
export type ResumeAvailableTechnologiesImageArgs = {
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

/** Resume page [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/resume) */
export type ResumeAvailableTechnologiesCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

/** Resume page [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/resume) */
export type ResumeProjectsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

/** Resume page [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/resume) */
export type ResumeOpenSourceProjectsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

/** Resume page [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/resume) */
export type ResumeStudiesImageArgs = {
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

/** Resume page [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/resume) */
export type ResumeStudiesCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

/** Resume page [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/resume) */
export type ResumeOtherStudiesImageArgs = {
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

/** Resume page [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/resume) */
export type ResumeOtherStudiesCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type ResumeLinkingCollections = {
  __typename?: 'ResumeLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type ResumeLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type ResumeAboutMe = {
  __typename?: 'ResumeAboutMe'
  json: Scalars['JSON']
  links: ResumeAboutMeLinks
}

export type ResumeAboutMeLinks = {
  __typename?: 'ResumeAboutMeLinks'
  entries: ResumeAboutMeEntries
  assets: ResumeAboutMeAssets
}

export type ResumeAboutMeEntries = {
  __typename?: 'ResumeAboutMeEntries'
  inline: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  block: Array<Maybe<Entry>>
}

export type ResumeAboutMeAssets = {
  __typename?: 'ResumeAboutMeAssets'
  hyperlink: Array<Maybe<Asset>>
  block: Array<Maybe<Asset>>
}

export type ResumePreviousWorkCollection = {
  __typename?: 'ResumePreviousWorkCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<PreviousWork>>
}

/** Previous Work Information [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/previousWork) */
export type PreviousWork = Entry & {
  __typename?: 'PreviousWork'
  sys: Sys
  linkedFrom?: Maybe<PreviousWorkLinkingCollections>
  companyName?: Maybe<Scalars['String']>
  jobTitle?: Maybe<Scalars['String']>
  from?: Maybe<Scalars['DateTime']>
  to?: Maybe<Scalars['DateTime']>
  responsibilities?: Maybe<PreviousWorkResponsibilities>
  category?: Maybe<Scalars['String']>
}

export type PreviousWorkLinkingCollections = {
  __typename?: 'PreviousWorkLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  resumeCollection?: Maybe<ResumeCollection>
}

export type PreviousWorkLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type PreviousWorkLinkingCollectionsResumeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type PreviousWorkResponsibilities = {
  __typename?: 'PreviousWorkResponsibilities'
  json: Scalars['JSON']
  links: PreviousWorkResponsibilitiesLinks
}

export type PreviousWorkResponsibilitiesLinks = {
  __typename?: 'PreviousWorkResponsibilitiesLinks'
  entries: PreviousWorkResponsibilitiesEntries
  assets: PreviousWorkResponsibilitiesAssets
}

export type PreviousWorkResponsibilitiesEntries = {
  __typename?: 'PreviousWorkResponsibilitiesEntries'
  inline: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  block: Array<Maybe<Entry>>
}

export type PreviousWorkResponsibilitiesAssets = {
  __typename?: 'PreviousWorkResponsibilitiesAssets'
  hyperlink: Array<Maybe<Asset>>
  block: Array<Maybe<Asset>>
}

export type ResumeAvailableTechnologiesCollection = {
  __typename?: 'ResumeAvailableTechnologiesCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<AvailableTechnology>>
}

/** Technologies that are available for me to work with [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/availableTechnology) */
export type AvailableTechnology = Entry & {
  __typename?: 'AvailableTechnology'
  sys: Sys
  linkedFrom?: Maybe<AvailableTechnologyLinkingCollections>
  technologyImage?: Maybe<Asset>
  category?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  stars?: Maybe<Scalars['Int']>
}

/** Technologies that are available for me to work with [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/availableTechnology) */
export type AvailableTechnologyTechnologyImageArgs = {
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type AvailableTechnologyLinkingCollections = {
  __typename?: 'AvailableTechnologyLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  resumeCollection?: Maybe<ResumeCollection>
}

export type AvailableTechnologyLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type AvailableTechnologyLinkingCollectionsResumeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type ResumeProjectsCollection = {
  __typename?: 'ResumeProjectsCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Project>>
}

/** Project portfolio [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/project) */
export type Project = Entry & {
  __typename?: 'Project'
  sys: Sys
  linkedFrom?: Maybe<ProjectLinkingCollections>
  slug?: Maybe<Scalars['String']>
  projectImage?: Maybe<Asset>
  name?: Maybe<Scalars['String']>
  body?: Maybe<ProjectBody>
  projectUrl?: Maybe<Scalars['String']>
}

/** Project portfolio [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/project) */
export type ProjectProjectImageArgs = {
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type ProjectLinkingCollections = {
  __typename?: 'ProjectLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  resumeCollection?: Maybe<ResumeCollection>
}

export type ProjectLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type ProjectLinkingCollectionsResumeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type ProjectBody = {
  __typename?: 'ProjectBody'
  json: Scalars['JSON']
  links: ProjectBodyLinks
}

export type ProjectBodyLinks = {
  __typename?: 'ProjectBodyLinks'
  entries: ProjectBodyEntries
  assets: ProjectBodyAssets
}

export type ProjectBodyEntries = {
  __typename?: 'ProjectBodyEntries'
  inline: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  block: Array<Maybe<Entry>>
}

export type ProjectBodyAssets = {
  __typename?: 'ProjectBodyAssets'
  hyperlink: Array<Maybe<Asset>>
  block: Array<Maybe<Asset>>
}

export type ResumeOpenSourceProjectsCollection = {
  __typename?: 'ResumeOpenSourceProjectsCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<OpenSourceProject>>
}

/** Open source project [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/openSourceProject) */
export type OpenSourceProject = Entry & {
  __typename?: 'OpenSourceProject'
  sys: Sys
  linkedFrom?: Maybe<OpenSourceProjectLinkingCollections>
  slug?: Maybe<Scalars['String']>
  projectImage?: Maybe<Asset>
  name?: Maybe<Scalars['String']>
  body?: Maybe<OpenSourceProjectBody>
  projectUrl?: Maybe<Scalars['String']>
}

/** Open source project [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/openSourceProject) */
export type OpenSourceProjectProjectImageArgs = {
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type OpenSourceProjectLinkingCollections = {
  __typename?: 'OpenSourceProjectLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  resumeCollection?: Maybe<ResumeCollection>
}

export type OpenSourceProjectLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type OpenSourceProjectLinkingCollectionsResumeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type OpenSourceProjectBody = {
  __typename?: 'OpenSourceProjectBody'
  json: Scalars['JSON']
  links: OpenSourceProjectBodyLinks
}

export type OpenSourceProjectBodyLinks = {
  __typename?: 'OpenSourceProjectBodyLinks'
  entries: OpenSourceProjectBodyEntries
  assets: OpenSourceProjectBodyAssets
}

export type OpenSourceProjectBodyEntries = {
  __typename?: 'OpenSourceProjectBodyEntries'
  inline: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  block: Array<Maybe<Entry>>
}

export type OpenSourceProjectBodyAssets = {
  __typename?: 'OpenSourceProjectBodyAssets'
  hyperlink: Array<Maybe<Asset>>
  block: Array<Maybe<Asset>>
}

export type ResumeStudiesCollection = {
  __typename?: 'ResumeStudiesCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<FormalStudy>>
}

/** A single study [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/formalStudy) */
export type FormalStudy = Entry & {
  __typename?: 'FormalStudy'
  sys: Sys
  linkedFrom?: Maybe<FormalStudyLinkingCollections>
  degree?: Maybe<Scalars['String']>
  institutionImage?: Maybe<Asset>
  institutionName?: Maybe<Scalars['String']>
  from?: Maybe<Scalars['DateTime']>
  to?: Maybe<Scalars['DateTime']>
}

/** A single study [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/formalStudy) */
export type FormalStudyInstitutionImageArgs = {
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type FormalStudyLinkingCollections = {
  __typename?: 'FormalStudyLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  resumeCollection?: Maybe<ResumeCollection>
}

export type FormalStudyLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type FormalStudyLinkingCollectionsResumeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type ResumeOtherStudiesCollection = {
  __typename?: 'ResumeOtherStudiesCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<ResumeOtherStudies>>
}

/** Other studies [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/resumeOtherStudies) */
export type ResumeOtherStudies = Entry & {
  __typename?: 'ResumeOtherStudies'
  sys: Sys
  linkedFrom?: Maybe<ResumeOtherStudiesLinkingCollections>
  title?: Maybe<Scalars['String']>
  certificateUrl?: Maybe<Scalars['String']>
  institutionName?: Maybe<Scalars['String']>
  instructor?: Maybe<Scalars['String']>
}

export type ResumeOtherStudiesLinkingCollections = {
  __typename?: 'ResumeOtherStudiesLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  resumeCollection?: Maybe<ResumeCollection>
}

export type ResumeOtherStudiesLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type ResumeOtherStudiesLinkingCollectionsResumeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type LandingCollection = {
  __typename?: 'LandingCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Landing>>
}

/** Landing page contents [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/landing) */
export type Landing = Entry & {
  __typename?: 'Landing'
  sys: Sys
  linkedFrom?: Maybe<LandingLinkingCollections>
  displayName?: Maybe<Scalars['String']>
  briefing?: Maybe<Scalars['String']>
  featuredImage?: Maybe<Asset>
  qualities?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** Landing page contents [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/landing) */
export type LandingFeaturedImageArgs = {
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type LandingLinkingCollections = {
  __typename?: 'LandingLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type LandingLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type OpenSourceProjectCollection = {
  __typename?: 'OpenSourceProjectCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<OpenSourceProject>>
}

export type ProjectCollection = {
  __typename?: 'ProjectCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Project>>
}

export type FormalStudyCollection = {
  __typename?: 'FormalStudyCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<FormalStudy>>
}

export type AwardsCollection = {
  __typename?: 'AwardsCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Awards>>
}

/** Prizes and awards received [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/awards) */
export type Awards = Entry & {
  __typename?: 'Awards'
  sys: Sys
  linkedFrom?: Maybe<AwardsLinkingCollections>
  name?: Maybe<Scalars['String']>
  details?: Maybe<AwardsDetails>
  awardImage?: Maybe<Asset>
}

/** Prizes and awards received [See type definition](https://app.contentful.com/spaces/q25vrbd3wsbu/content_types/awards) */
export type AwardsAwardImageArgs = {
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type AwardsLinkingCollections = {
  __typename?: 'AwardsLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type AwardsLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type AwardsDetails = {
  __typename?: 'AwardsDetails'
  json: Scalars['JSON']
  links: AwardsDetailsLinks
}

export type AwardsDetailsLinks = {
  __typename?: 'AwardsDetailsLinks'
  entries: AwardsDetailsEntries
  assets: AwardsDetailsAssets
}

export type AwardsDetailsEntries = {
  __typename?: 'AwardsDetailsEntries'
  inline: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  block: Array<Maybe<Entry>>
}

export type AwardsDetailsAssets = {
  __typename?: 'AwardsDetailsAssets'
  hyperlink: Array<Maybe<Asset>>
  block: Array<Maybe<Asset>>
}

export type AvailableTechnologyCollection = {
  __typename?: 'AvailableTechnologyCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<AvailableTechnology>>
}

export type AssetFilter = {
  sys?: Maybe<SysFilter>
  title_exists?: Maybe<Scalars['Boolean']>
  title?: Maybe<Scalars['String']>
  title_not?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_contains?: Maybe<Scalars['String']>
  title_not_contains?: Maybe<Scalars['String']>
  description_exists?: Maybe<Scalars['Boolean']>
  description?: Maybe<Scalars['String']>
  description_not?: Maybe<Scalars['String']>
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  description_contains?: Maybe<Scalars['String']>
  description_not_contains?: Maybe<Scalars['String']>
  url_exists?: Maybe<Scalars['Boolean']>
  url?: Maybe<Scalars['String']>
  url_not?: Maybe<Scalars['String']>
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  url_contains?: Maybe<Scalars['String']>
  url_not_contains?: Maybe<Scalars['String']>
  size_exists?: Maybe<Scalars['Boolean']>
  size?: Maybe<Scalars['Int']>
  size_not?: Maybe<Scalars['Int']>
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  size_gt?: Maybe<Scalars['Int']>
  size_gte?: Maybe<Scalars['Int']>
  size_lt?: Maybe<Scalars['Int']>
  size_lte?: Maybe<Scalars['Int']>
  contentType_exists?: Maybe<Scalars['Boolean']>
  contentType?: Maybe<Scalars['String']>
  contentType_not?: Maybe<Scalars['String']>
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  contentType_contains?: Maybe<Scalars['String']>
  contentType_not_contains?: Maybe<Scalars['String']>
  fileName_exists?: Maybe<Scalars['Boolean']>
  fileName?: Maybe<Scalars['String']>
  fileName_not?: Maybe<Scalars['String']>
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  fileName_contains?: Maybe<Scalars['String']>
  fileName_not_contains?: Maybe<Scalars['String']>
  width_exists?: Maybe<Scalars['Boolean']>
  width?: Maybe<Scalars['Int']>
  width_not?: Maybe<Scalars['Int']>
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  width_gt?: Maybe<Scalars['Int']>
  width_gte?: Maybe<Scalars['Int']>
  width_lt?: Maybe<Scalars['Int']>
  width_lte?: Maybe<Scalars['Int']>
  height_exists?: Maybe<Scalars['Boolean']>
  height?: Maybe<Scalars['Int']>
  height_not?: Maybe<Scalars['Int']>
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  height_gt?: Maybe<Scalars['Int']>
  height_gte?: Maybe<Scalars['Int']>
  height_lt?: Maybe<Scalars['Int']>
  height_lte?: Maybe<Scalars['Int']>
  OR?: Maybe<Array<Maybe<AssetFilter>>>
  AND?: Maybe<Array<Maybe<AssetFilter>>>
}

export type SysFilter = {
  id_exists?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['String']>
  id_not?: Maybe<Scalars['String']>
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  id_contains?: Maybe<Scalars['String']>
  id_not_contains?: Maybe<Scalars['String']>
  publishedAt_exists?: Maybe<Scalars['Boolean']>
  publishedAt?: Maybe<Scalars['String']>
  publishedAt_not?: Maybe<Scalars['String']>
  publishedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  publishedAt_contains?: Maybe<Scalars['String']>
  publishedAt_not_contains?: Maybe<Scalars['String']>
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>
  firstPublishedAt?: Maybe<Scalars['String']>
  firstPublishedAt_not?: Maybe<Scalars['String']>
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  firstPublishedAt_contains?: Maybe<Scalars['String']>
  firstPublishedAt_not_contains?: Maybe<Scalars['String']>
  publishedVersion_exists?: Maybe<Scalars['Boolean']>
  publishedVersion?: Maybe<Scalars['String']>
  publishedVersion_not?: Maybe<Scalars['String']>
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['String']>>>
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  publishedVersion_contains?: Maybe<Scalars['String']>
  publishedVersion_not_contains?: Maybe<Scalars['String']>
}

export enum AssetOrder {
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type AssetCollection = {
  __typename?: 'AssetCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Asset>>
}

export type ResumeFilter = {
  sys?: Maybe<SysFilter>
  title_exists?: Maybe<Scalars['Boolean']>
  title?: Maybe<Scalars['String']>
  title_not?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_contains?: Maybe<Scalars['String']>
  title_not_contains?: Maybe<Scalars['String']>
  subtitle_exists?: Maybe<Scalars['Boolean']>
  subtitle?: Maybe<Scalars['String']>
  subtitle_not?: Maybe<Scalars['String']>
  subtitle_in?: Maybe<Array<Maybe<Scalars['String']>>>
  subtitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  subtitle_contains?: Maybe<Scalars['String']>
  subtitle_not_contains?: Maybe<Scalars['String']>
  OR?: Maybe<Array<Maybe<ResumeFilter>>>
  AND?: Maybe<Array<Maybe<ResumeFilter>>>
}

export enum ResumeOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type LandingFilter = {
  sys?: Maybe<SysFilter>
  displayName_exists?: Maybe<Scalars['Boolean']>
  displayName?: Maybe<Scalars['String']>
  displayName_not?: Maybe<Scalars['String']>
  displayName_in?: Maybe<Array<Maybe<Scalars['String']>>>
  displayName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  displayName_contains?: Maybe<Scalars['String']>
  displayName_not_contains?: Maybe<Scalars['String']>
  briefing_exists?: Maybe<Scalars['Boolean']>
  briefing?: Maybe<Scalars['String']>
  briefing_not?: Maybe<Scalars['String']>
  briefing_in?: Maybe<Array<Maybe<Scalars['String']>>>
  briefing_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  briefing_contains?: Maybe<Scalars['String']>
  briefing_not_contains?: Maybe<Scalars['String']>
  qualities_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>
  qualities_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>
  qualities_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>
  OR?: Maybe<Array<Maybe<LandingFilter>>>
  AND?: Maybe<Array<Maybe<LandingFilter>>>
}

export enum LandingOrder {
  DisplayNameAsc = 'displayName_ASC',
  DisplayNameDesc = 'displayName_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type OpenSourceProjectFilter = {
  sys?: Maybe<SysFilter>
  slug_exists?: Maybe<Scalars['Boolean']>
  slug?: Maybe<Scalars['String']>
  slug_not?: Maybe<Scalars['String']>
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  slug_contains?: Maybe<Scalars['String']>
  slug_not_contains?: Maybe<Scalars['String']>
  name_exists?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  projectUrl_exists?: Maybe<Scalars['Boolean']>
  projectUrl?: Maybe<Scalars['String']>
  projectUrl_not?: Maybe<Scalars['String']>
  projectUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>
  projectUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  projectUrl_contains?: Maybe<Scalars['String']>
  projectUrl_not_contains?: Maybe<Scalars['String']>
  OR?: Maybe<Array<Maybe<OpenSourceProjectFilter>>>
  AND?: Maybe<Array<Maybe<OpenSourceProjectFilter>>>
}

export enum OpenSourceProjectOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ProjectUrlAsc = 'projectUrl_ASC',
  ProjectUrlDesc = 'projectUrl_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ProjectFilter = {
  sys?: Maybe<SysFilter>
  slug_exists?: Maybe<Scalars['Boolean']>
  slug?: Maybe<Scalars['String']>
  slug_not?: Maybe<Scalars['String']>
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  slug_contains?: Maybe<Scalars['String']>
  slug_not_contains?: Maybe<Scalars['String']>
  name_exists?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  projectUrl_exists?: Maybe<Scalars['Boolean']>
  projectUrl?: Maybe<Scalars['String']>
  projectUrl_not?: Maybe<Scalars['String']>
  projectUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>
  projectUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  projectUrl_contains?: Maybe<Scalars['String']>
  projectUrl_not_contains?: Maybe<Scalars['String']>
  OR?: Maybe<Array<Maybe<ProjectFilter>>>
  AND?: Maybe<Array<Maybe<ProjectFilter>>>
}

export enum ProjectOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ProjectUrlAsc = 'projectUrl_ASC',
  ProjectUrlDesc = 'projectUrl_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ResumeOtherStudiesFilter = {
  sys?: Maybe<SysFilter>
  title_exists?: Maybe<Scalars['Boolean']>
  title?: Maybe<Scalars['String']>
  title_not?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_contains?: Maybe<Scalars['String']>
  title_not_contains?: Maybe<Scalars['String']>
  certificateUrl_exists?: Maybe<Scalars['Boolean']>
  certificateUrl?: Maybe<Scalars['String']>
  certificateUrl_not?: Maybe<Scalars['String']>
  certificateUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>
  certificateUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  certificateUrl_contains?: Maybe<Scalars['String']>
  certificateUrl_not_contains?: Maybe<Scalars['String']>
  institutionName_exists?: Maybe<Scalars['Boolean']>
  institutionName?: Maybe<Scalars['String']>
  institutionName_not?: Maybe<Scalars['String']>
  institutionName_in?: Maybe<Array<Maybe<Scalars['String']>>>
  institutionName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  institutionName_contains?: Maybe<Scalars['String']>
  institutionName_not_contains?: Maybe<Scalars['String']>
  instructor_exists?: Maybe<Scalars['Boolean']>
  instructor?: Maybe<Scalars['String']>
  instructor_not?: Maybe<Scalars['String']>
  instructor_in?: Maybe<Array<Maybe<Scalars['String']>>>
  instructor_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  instructor_contains?: Maybe<Scalars['String']>
  instructor_not_contains?: Maybe<Scalars['String']>
  OR?: Maybe<Array<Maybe<ResumeOtherStudiesFilter>>>
  AND?: Maybe<Array<Maybe<ResumeOtherStudiesFilter>>>
}

export enum ResumeOtherStudiesOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  CertificateUrlAsc = 'certificateUrl_ASC',
  CertificateUrlDesc = 'certificateUrl_DESC',
  InstitutionNameAsc = 'institutionName_ASC',
  InstitutionNameDesc = 'institutionName_DESC',
  InstructorAsc = 'instructor_ASC',
  InstructorDesc = 'instructor_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type FormalStudyFilter = {
  sys?: Maybe<SysFilter>
  degree_exists?: Maybe<Scalars['Boolean']>
  degree?: Maybe<Scalars['String']>
  degree_not?: Maybe<Scalars['String']>
  degree_in?: Maybe<Array<Maybe<Scalars['String']>>>
  degree_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  degree_contains?: Maybe<Scalars['String']>
  degree_not_contains?: Maybe<Scalars['String']>
  institutionName_exists?: Maybe<Scalars['Boolean']>
  institutionName?: Maybe<Scalars['String']>
  institutionName_not?: Maybe<Scalars['String']>
  institutionName_in?: Maybe<Array<Maybe<Scalars['String']>>>
  institutionName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  institutionName_contains?: Maybe<Scalars['String']>
  institutionName_not_contains?: Maybe<Scalars['String']>
  from_exists?: Maybe<Scalars['Boolean']>
  from?: Maybe<Scalars['DateTime']>
  from_not?: Maybe<Scalars['DateTime']>
  from_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  from_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  from_gt?: Maybe<Scalars['DateTime']>
  from_gte?: Maybe<Scalars['DateTime']>
  from_lt?: Maybe<Scalars['DateTime']>
  from_lte?: Maybe<Scalars['DateTime']>
  to_exists?: Maybe<Scalars['Boolean']>
  to?: Maybe<Scalars['DateTime']>
  to_not?: Maybe<Scalars['DateTime']>
  to_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  to_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  to_gt?: Maybe<Scalars['DateTime']>
  to_gte?: Maybe<Scalars['DateTime']>
  to_lt?: Maybe<Scalars['DateTime']>
  to_lte?: Maybe<Scalars['DateTime']>
  OR?: Maybe<Array<Maybe<FormalStudyFilter>>>
  AND?: Maybe<Array<Maybe<FormalStudyFilter>>>
}

export enum FormalStudyOrder {
  DegreeAsc = 'degree_ASC',
  DegreeDesc = 'degree_DESC',
  InstitutionNameAsc = 'institutionName_ASC',
  InstitutionNameDesc = 'institutionName_DESC',
  FromAsc = 'from_ASC',
  FromDesc = 'from_DESC',
  ToAsc = 'to_ASC',
  ToDesc = 'to_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type PreviousWorkFilter = {
  sys?: Maybe<SysFilter>
  companyName_exists?: Maybe<Scalars['Boolean']>
  companyName?: Maybe<Scalars['String']>
  companyName_not?: Maybe<Scalars['String']>
  companyName_in?: Maybe<Array<Maybe<Scalars['String']>>>
  companyName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  companyName_contains?: Maybe<Scalars['String']>
  companyName_not_contains?: Maybe<Scalars['String']>
  jobTitle_exists?: Maybe<Scalars['Boolean']>
  jobTitle?: Maybe<Scalars['String']>
  jobTitle_not?: Maybe<Scalars['String']>
  jobTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>
  jobTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  jobTitle_contains?: Maybe<Scalars['String']>
  jobTitle_not_contains?: Maybe<Scalars['String']>
  from_exists?: Maybe<Scalars['Boolean']>
  from?: Maybe<Scalars['DateTime']>
  from_not?: Maybe<Scalars['DateTime']>
  from_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  from_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  from_gt?: Maybe<Scalars['DateTime']>
  from_gte?: Maybe<Scalars['DateTime']>
  from_lt?: Maybe<Scalars['DateTime']>
  from_lte?: Maybe<Scalars['DateTime']>
  to_exists?: Maybe<Scalars['Boolean']>
  to?: Maybe<Scalars['DateTime']>
  to_not?: Maybe<Scalars['DateTime']>
  to_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  to_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  to_gt?: Maybe<Scalars['DateTime']>
  to_gte?: Maybe<Scalars['DateTime']>
  to_lt?: Maybe<Scalars['DateTime']>
  to_lte?: Maybe<Scalars['DateTime']>
  category_exists?: Maybe<Scalars['Boolean']>
  category?: Maybe<Scalars['String']>
  category_not?: Maybe<Scalars['String']>
  category_in?: Maybe<Array<Maybe<Scalars['String']>>>
  category_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  category_contains?: Maybe<Scalars['String']>
  category_not_contains?: Maybe<Scalars['String']>
  OR?: Maybe<Array<Maybe<PreviousWorkFilter>>>
  AND?: Maybe<Array<Maybe<PreviousWorkFilter>>>
}

export enum PreviousWorkOrder {
  CompanyNameAsc = 'companyName_ASC',
  CompanyNameDesc = 'companyName_DESC',
  JobTitleAsc = 'jobTitle_ASC',
  JobTitleDesc = 'jobTitle_DESC',
  FromAsc = 'from_ASC',
  FromDesc = 'from_DESC',
  ToAsc = 'to_ASC',
  ToDesc = 'to_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type PreviousWorkCollection = {
  __typename?: 'PreviousWorkCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<PreviousWork>>
}

export type AwardsFilter = {
  sys?: Maybe<SysFilter>
  name_exists?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  OR?: Maybe<Array<Maybe<AwardsFilter>>>
  AND?: Maybe<Array<Maybe<AwardsFilter>>>
}

export enum AwardsOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type AvailableTechnologyFilter = {
  sys?: Maybe<SysFilter>
  category_exists?: Maybe<Scalars['Boolean']>
  category?: Maybe<Scalars['String']>
  category_not?: Maybe<Scalars['String']>
  category_in?: Maybe<Array<Maybe<Scalars['String']>>>
  category_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  category_contains?: Maybe<Scalars['String']>
  category_not_contains?: Maybe<Scalars['String']>
  name_exists?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  stars_exists?: Maybe<Scalars['Boolean']>
  stars?: Maybe<Scalars['Int']>
  stars_not?: Maybe<Scalars['Int']>
  stars_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  stars_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  stars_gt?: Maybe<Scalars['Int']>
  stars_gte?: Maybe<Scalars['Int']>
  stars_lt?: Maybe<Scalars['Int']>
  stars_lte?: Maybe<Scalars['Int']>
  OR?: Maybe<Array<Maybe<AvailableTechnologyFilter>>>
  AND?: Maybe<Array<Maybe<AvailableTechnologyFilter>>>
}

export enum AvailableTechnologyOrder {
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StarsAsc = 'stars_ASC',
  StarsDesc = 'stars_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type LandingQueryVariables = Exact<{
  locale: Scalars['String']
}>

export type LandingQuery = {
  __typename?: 'Query'
  landing?: Maybe<{
    __typename?: 'Landing'
    displayName?: Maybe<string>
    briefing?: Maybe<string>
    qualities?: Maybe<Array<Maybe<string>>>
    featuredImage?: Maybe<{
      __typename?: 'Asset'
      description?: Maybe<string>
      url?: Maybe<string>
    }>
  }>
}

export type ResumeQueryVariables = Exact<{
  locale: Scalars['String']
}>

export type ResumeQuery = {
  __typename?: 'Query'
  resume?: Maybe<{
    __typename?: 'Resume'
    title?: Maybe<string>
    subtitle?: Maybe<string>
    previousWorkCollection?: Maybe<{
      __typename?: 'ResumePreviousWorkCollection'
      items: Array<
        Maybe<{
          __typename?: 'PreviousWork'
          companyName?: Maybe<string>
          jobTitle?: Maybe<string>
          from?: Maybe<any>
          to?: Maybe<any>
          category?: Maybe<string>
          responsibilities?: Maybe<{
            __typename?: 'PreviousWorkResponsibilities'
            json: any
          }>
        }>
      >
    }>
    availableTechnologiesCollection?: Maybe<{
      __typename?: 'ResumeAvailableTechnologiesCollection'
      items: Array<
        Maybe<{
          __typename?: 'AvailableTechnology'
          name?: Maybe<string>
          category?: Maybe<string>
          stars?: Maybe<number>
        }>
      >
    }>
    aboutMe?: Maybe<{ __typename?: 'ResumeAboutMe'; json: any }>
    profilePicture?: Maybe<{
      __typename?: 'Asset'
      description?: Maybe<string>
      title?: Maybe<string>
      url?: Maybe<string>
    }>
  }>
}

export const LandingDocument = gql`
  query landing($locale: String!) {
    landing(id: "KkFrOhDTYsSXCWXiAWHaT", locale: $locale) {
      displayName
      briefing
      qualities
      featuredImage {
        description
        url
      }
    }
  }
`
export const ResumeDocument = gql`
  query resume($locale: String!) {
    resume(id: "1waj9zyRpuED5KEnJNwD15", locale: $locale) {
      title
      subtitle
      previousWorkCollection {
        items {
          companyName
          jobTitle
          from
          to
          category
          responsibilities {
            json
          }
        }
      }
      availableTechnologiesCollection {
        items {
          name
          category
          stars
        }
      }
      aboutMe {
        json
      }
      profilePicture {
        description
        title
        url
      }
    }
  }
`

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction()
export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    landing(variables: LandingQueryVariables): Promise<LandingQuery> {
      return withWrapper(() =>
        client.request<LandingQuery>(print(LandingDocument), variables),
      )
    },
    resume(variables: ResumeQueryVariables): Promise<ResumeQuery> {
      return withWrapper(() =>
        client.request<ResumeQuery>(print(ResumeDocument), variables),
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
