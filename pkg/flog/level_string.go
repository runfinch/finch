// Code generated by "stringer -type=Level"; DO NOT EDIT.

package flog

import "strconv"

func _() {
	// An "invalid array index" compiler error signifies that the constant values have changed.
	// Re-run the stringer command to generate them again.
	var x [1]struct{}
	_ = x[Debug-0]
	_ = x[Panic-1]
}

const _Level_name = "DebugPanic"

var _Level_index = [...]uint8{0, 5, 10}

func (i Level) String() string {
	if i < 0 || i >= Level(len(_Level_index)-1) {
		return "Level(" + strconv.FormatInt(int64(i), 10) + ")"
	}
	return _Level_name[_Level_index[i]:_Level_index[i+1]]
}