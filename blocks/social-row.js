import { useBlockProps, InspectorControls, PlainText } from '@wordpress/block-editor';
import { PanelBody, PanelRow, RadioControl, Dashicon } from '@wordpress/components';
import blockMetadata from "./social-row-block.json";

const { name } = blockMetadata;


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */

const settings ={
    icon:"smiley",
    attributes: {
		accountType: {
			type: "string",
			default: "twitter",
		},
		twitter: {
			default: {
				text: "",
				account: "",
			},
		},
		instagram: {
			default: {
				text: "",
				url: "",
			},
		},
	},
    edit({ attributes, setAttributes }) {
		return (
            <div {...useBlockProps}>
                <InspectorControls style={{ marginBottom: "40px" }}>
                    <PanelBody>
                        <PanelRow>
                            <RadioControl
                                label="Social Media"
                                help="The type of social media to use"
                                selected={ attributes.accountType }
                                options={[
                                    { label: "Follow on Twitter", value: "twitter" },
                                    { label: "Follow on instagram", value: "instagram" },
                                ]}
                                onChange={(value) => setAttributes({ accountType: value })}
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
                { attributes.accountType == "twitter" && (
					<div>
						<Dashicon icon="twitter"/>
						<PlainText
							placeholder="Follow me on Twitter"
							value={ attributes.twitter.text }
							onChange={(value) => {
								setAttributes({
									twitter: { ...attributes.twitter, text: value },
								});
							}}
						/>
						<PlainText
							placeholder="Your Twitter account"
							value={ attributes.twitter.account }
							onChange={(value) => {
								setAttributes({
									twitter: { ...attributes.twitter, account: value },
								});
							}}
						/>
					</div>
				)}
                { attributes.accountType == "instagram" && (
					<div>
                        <Dashicon icon="instagram"/>
                        <PlainText
							placeholder="Follow me on Instagram"
							value={ attributes.instagram.text }
							onChange={(value) => {
								setAttributes({
									instagram: { ...attributes.instagram, text: value },
								});
							}}
						/>
                        <PlainText
							placeholder="Your Instagram"
							value={ attributes.instagram.url }
							onChange={(value) => {
								setAttributes({
									instagram: { ...attributes.instagram, url: value },
								});
							}}
						/>
                    </div>                    
				)}
            </div>
        );
	},
    save(){
        return (
            <div {...useBlockProps()}> 
          
            </div>
            );
    }
}

export { blockMetadata, name, settings };