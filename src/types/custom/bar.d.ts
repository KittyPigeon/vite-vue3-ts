

interface BarItemData {
	nameLike: string;
	local_url: string;
	agencyList: AgencyList[];
}

interface AgencyList {
	agencyId: number;
	agentName: string;
	userId: number;
	kedouId: string;
	linkMan: string;
	phone: string;
	addUser?: string;
	addTime?: AddTime;
	remark: string;
	addType?: number;
	auditCount?: any;
	auditedCount?: any;
	lastLoginDate?: AddTime;
	superAgencyEmployee?: any;
	manageRoomIds?: any;
	useRoomIds?: any;
	barCnt: number;
	barLength: number;
	epCnt?: any;
	agentNameStr: string;
	barVoList: BarVoList[];
	addTimeStr: string;
	addTypeStr: string;
	lastLoginDateStr: string;
}

interface BarVoList {
	barId: number;
	userId?: number;
	barName: string;
	proId: number;
	cityId: number;
	linkName: string;
	phone: string;
	isOpen: number;
	license: string;
	status: number;
	gateway?: number;
	subnetMask?: number;
	addUser: string;
	addTime: number;
	roomId: number;
	canRegist: number;
	maxEp: number;
	expireTime: AddTime;
	agencyId: number;
	bindTime?: any;
	passwd?: string;
	localRoute?: any;
	localIp?: any;
	count: number;
	agencyUserId?: any;
	agencyName?: any;
	barCnt: number;
	roomName?: any;
	machine?: any;
	machineStatus: boolean;
	loginUserParentId?: any;
	barIdConfirmed: boolean;
	clientNum?: any;
	startPointNum?: any;
	userName?: any;
	running: boolean;
	addTimeStr: string;
	subnetMaskStr: string;
	isManaged: boolean;
	canEdit: boolean;
	checking: boolean;
	licenseStr: string;
	statusStr: string;
	cityStr: string;
	proStr: string;
	gatewayStr: string;
	checkingStatus: boolean;
}

interface AddTime {
	dayOfMonth: number;
	dayOfWeek: string;
	dayOfYear: number;
	month: string;
	year: number;
	monthValue: number;
	hour: number;
	minute: number;
	nano: number;
	second: number;
	chronology: Chronology;
}

interface Chronology {
	id: string;
	calendarType: string;
}
