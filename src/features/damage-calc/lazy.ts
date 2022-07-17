import { registerEpic } from 'src/app';
import { DamageCalc } from './component/DamageCalc';
import { epic } from './core/epic';

registerEpic(epic);
export default DamageCalc;
