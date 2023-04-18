import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

import blockMetadata from "./social-row-block.json";

const { name } = blockMetadata;

const settings ={
    icon:"smiley",
    edit(){
        return (
            <div {...useBlockProps}> 
                <InnerBlocks  templateLock = "all"/>
            </div>
            );
    },
    save(){
        return (
            <div {...useBlockProps}> 
                <InnerBlocks  templateLock = "all"/>
            </div>
            );
    }
}

export { blockMetadata, name, settings };