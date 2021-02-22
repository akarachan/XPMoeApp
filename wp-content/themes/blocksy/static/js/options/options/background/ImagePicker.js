import {
	Fragment,
	createElement,
	Component,
	useRef,
	useEffect,
	useMemo,
	useCallback,
	useState,
} from '@wordpress/element'
import classnames from 'classnames'
import { __ } from 'ct-i18n'
import GenericOptionType from '../../GenericOptionType'

const ImagePicker = ({ option, value, onChange, setOutsideClickFreezed }) => {
	return (
		<Fragment>
			<GenericOptionType
				value={value['background_image']}
				values={value}
				option={{
					id: 'background_image',
					label: false,
					type: 'ct-image-uploader',
					value: option.value['background_image'],
					has_position_picker: true,
					emptyLabel: __('Select Image', 'blocksy'),
					filledLabel: __('Change Image', 'blocksy'),
					onFrameOpen: () => {
						setOutsideClickFreezed(true)
					},

					onFrameClose: () => {
						setOutsideClickFreezed(false)
					},
				}}
				hasRevertButton={false}
				onChange={(newValue) =>
					onChange({
						...value,
						background_image: newValue,
					})
				}
			/>

			<GenericOptionType
				value={value['background_repeat']}
				values={value}
				option={{
					id: 'background_repeat',
					label: __('Background Repeat', 'blocksy'),
					attr: { 'data-type': 'repeat' },
					type: 'ct-radio',
					view: 'text',
					design: 'block',
					value: option.value['background_repeat'],
					choices: {
						'no-repeat':
							'<svg viewBox="0 0 16 16"><rect x="6" y="6" width="4" height="4"/></svg>',
						'repeat-x':
							'<svg viewBox="0 0 16 16"><rect y="6" width="4" height="4"/><rect x="6" y="6" width="4" height="4"/><rect x="12" y="6" width="4" height="4"/></svg>',
						'repeat-y':
							'<svg viewBox="0 0 16 16"><rect x="6" width="4" height="4"/><rect x="6" y="6" width="4" height="4"/><rect x="6" y="12" width="4" height="4"/></svg>',

						repeat:
							'<svg viewBox="0 0 16 16"><path d="M0,0h4v4H0V0z M6,0h4v4H6V0z M12,0h4v4h-4V0z M0,6h4v4H0V6z M6,6h4v4H6V6z M12,6h4v4h-4V6z M0,12h4v4H0V12z M6,12h4v4H6V12zM12,12h4v4h-4V12z"/></svg>',
					},
				}}
				hasRevertButton={false}
				onChange={(newValue) =>
					onChange({
						...value,
						background_repeat: newValue,
					})
				}
			/>

			<GenericOptionType
				value={value['background_size']}
				values={value}
				option={{
					id: 'background_size',
					label: __('Background Size', 'blocksy'),
					type: 'ct-radio',
					view: 'text',
					design: 'block',
					value: option.value['background_size'],
					choices: {
						auto: __('Auto', 'blocksy'),
						cover: __('Cover', 'blocksy'),
						contain: __('Contain', 'blocksy'),
					},
				}}
				hasRevertButton={false}
				onChange={(newValue) =>
					onChange({
						...value,
						background_size: newValue,
					})
				}
			/>

			<GenericOptionType
				value={value['background_attachment']}
				values={value}
				option={{
					id: 'background_size',
					label: __('Background Attachment', 'blocksy'),
					type: 'ct-radio',
					view: 'text',
					design: 'block',
					value: option.value['background_attachment'],
					choices: {
						scroll: __('Scroll', 'blocksy'),
						fixed: __('Fixed', 'blocksy'),
						inherit: __('Inherit', 'blocksy'),
					},
				}}
				hasRevertButton={false}
				onChange={(newValue) =>
					onChange({
						...value,
						background_attachment: newValue,
					})
				}
			/>

			{value.background_image.url && (
				<GenericOptionType
					value={value['overlayColor']}
					values={value}
					option={{
						id: 'overlayColor',
						label: __('Image Overlay Color', 'blocksy'),
						type: 'ct-color-picker',
						design: 'inline',
						value: option.value['overlayColor'],
						pickers: [
							{
								title: __('Initial', 'blocksy'),
								id: 'default',
							},
						],
						skipArrow: true,
						appendToBody: false,
					}}
					hasRevertButton={false}
					onChange={(newValue) =>
						onChange({
							...value,
							overlayColor: newValue,
						})
					}
				/>
			)}
		</Fragment>
	)
}

export default ImagePicker
