import { NextApiRequest, NextApiResponse } from 'next';

const upgrades = [
    { userId: 1, oldPlan: 'Basic', newPlan: 'Premium', upgradeDate: '2023-10-04' },
    { userId: 3, oldPlan: 'Basic', newPlan: 'Pro', upgradeDate: '2023-09-22' },
    // ... add more mock upgrade activities as desired
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(upgrades);
}
