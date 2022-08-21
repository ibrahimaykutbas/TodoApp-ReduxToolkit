import units from './units';

const type = {};

const size = punto => units.height / (720 / punto);

export default {type, size};
