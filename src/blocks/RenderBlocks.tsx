import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
//New
import { DirectorBlock } from './DirectoreWord/component'
import { WhoWeAreTabs } from './WhoWeAreBlock/components'
import { VideosBlock } from './VideosBlock/components'
import { LastEventBlock } from './LastEvents/Component'
import { ThemeOverviewBlock } from './ThemeListBlock/component'
import { RentalOverviewBlock } from './RentItemBlock/components'
import { Partners } from './Partners/components'
import { GroupedItemsBlock } from './InfrastructureBlock/component'
import { TextImageGroup } from './WhyESMTPblock/component'
import { LastFormationBlock } from './UpcomingFormations/components'
import { FeaturedFormationsBlock } from './SelectedFormationBlock/components'
import { StyledImageBlock } from './ImageContentBlock.tsx/components'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  directorBlock: DirectorBlock,
  whoWeAre: WhoWeAreTabs,
  videosBlock: VideosBlock,
  lastEvent: LastEventBlock,
  themeOverview: ThemeOverviewBlock,
  rentalOverview: RentalOverviewBlock,
  partners: Partners,
  groupedItems: GroupedItemsBlock,
  textImageGroup: TextImageGroup,
  upcomingFormations: LastFormationBlock,
  featuredFormations: FeaturedFormationsBlock,
  styledImage: StyledImageBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
