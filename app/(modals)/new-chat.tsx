import { AlphabetList } from 'react-native-section-alphabet-list';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import contacts from '@/assets/data/contacts.json';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';

const Page = () => {
	const data = contacts.map((contact, index) => ({
		value: `${contact.first_name} ${contact.last_name}`,
		name: `${contact.first_name} ${contact.last_name}`,
		img: contact.img,
		desc: contact.desc,
		key: `${contact.first_name} ${contact.last_name}-${index}`,
	}));

	return (
		<View style={{ flex: 1, backgroundColor: Colors.light.background }}>
			<AlphabetList
				data={data}
				stickySectionHeadersEnabled
				indexLetterStyle={{
					color: Colors.light.primary,
					fontSize: 12,
				}}
				indexContainerStyle={{
					width: 24,
					backgroundColor: Colors.light.background,
				}}
				renderCustomItem={(item: any) => (
					<TouchableOpacity>
						<View style={styles.listItemContainer}>
							<Image source={{ uri: item.img }} style={styles.listItemImage} />
							<View>
								<Text style={{ color: '#000', fontSize: 14 }}>{item.value}</Text>
								<Text style={{ color: Colors.light.gray, fontSize: 12 }}>
									{item.desc.length > 40 ? `${item.desc.substring(0, 40)}...` : item.desc}
								</Text>
							</View>
						</View>
						<View style={[defaultStyles.separator, { marginLeft: 50 }]} />
					</TouchableOpacity>
				)}
				renderCustomSectionHeader={(section) => (
					<View style={styles.sectionHeaderContainer}>
						<Text style={{ color: Colors.light.gray }}>{section.title}</Text>
					</View>
				)}
				style={{
					marginLeft: 14,
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	listItemContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		height: 50,
		paddingHorizontal: 14,
		backgroundColor: '#fff',
	},

	listItemImage: {
		width: 30,
		height: 30,
		borderRadius: 15,
	},

	sectionHeaderContainer: {
		height: 30,
		backgroundColor: Colors.light.background,
		justifyContent: 'center',
		paddingHorizontal: 14,
	},
});

export default Page;
