export const barTranslator = (data: BarItemData) => {
	return {
		// id: data.id,
		// name: data.goodsName,
		// price: (data.price / 100).toFixed(2),
		// status: data.status,
		// activityType: data.activityType,
		// description: data.desc,
		// brandName: data.brand,
		// mainPicUrl: data.mainPic,
		// tags: data.tag,
		nameLike: data.nameLike,
	};
};
