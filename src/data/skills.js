import { icons } from './skillIcons.js';

export const skillsData = {
	programmingLanguages: [
		{ name: 'Python', icon: icons.python },
		{ name: 'R', icon: icons.r },
		{ name: 'SQL', icon: icons.sql }
	],
	
	statisticsML: [
		{ name: 'Regression', icon: icons.regression },
		{ name: 'Classification', icon: icons.classification },
		{ name: 'Clustering', icon: icons.clustering },
		{ name: 'Time Series', icon: icons.timeSeries },
		{ name: 'Hypothesis Testing', icon: icons.hypothesis },
		{ name: 'Deep Learning', icon: icons.deepLearning }
	],
	
	tools: [
		{ name: 'Jupyter', icon: icons.jupyter },
		{ name: 'VS Code', icon: icons.vscode },
		{ name: 'Command Line', icon: icons.terminal },
		{ name: 'Databases', icon: icons.database },
        { name: 'Git', icon: icons.git }
	],
	
	compliance: [
		{ name: 'ISO 13485', icon: icons.iso },
		{ name: 'HIPAA', icon: icons.hipaa },
		{ name: 'Internal Audits', icon: icons.audit },
		{ name: 'SOP Development', icon: icons.sop }
	]
};