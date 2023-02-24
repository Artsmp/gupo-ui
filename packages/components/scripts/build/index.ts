import { series, parallel } from 'gulp'
import { clean, buildModules, buildFull, generateTypes, buildStyle } from './task'

export default series(clean, parallel(buildModules, buildFull, generateTypes, buildStyle))
