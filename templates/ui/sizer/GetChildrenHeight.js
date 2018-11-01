var GetChildrenHeight = function () {
    if (!this.visible) {
        return 0;
    }

    var result = 0;
    var children = this.sizerChildren;
    var child, padding, childHeight;
    if (this.orientation === 0) { // x
        // Get maximun height
        for (var i = 0, cnt = children.length; i < cnt; i++) {
            child = children[i];
            // Skip invisible child
            if (!child.visible) {
                continue;
            }

            childHeight = (child.isRexSizer) ? child.childrenHeight : child.height;
            padding = child.rexSizer.padding;
            childHeight += (padding.top + padding.bottom);
            result = Math.max(childHeight, result);
        }
    } else {
        // Get summation of minimum height
        for (var i = 0, cnt = children.length; i < cnt; i++) {
            child = children[i];
            if (!child.hasOwnProperty('rexSizer')) {
                continue;
            }
            // Skip invisible child
            if (!child.visible) {
                continue;
            }

            if (child.rexSizer.proportion === 0) {
                childHeight = (child.isRexSizer) ? child.childrenHeight : child.height;
            } else {
                childHeight = 0;
            }
            padding = child.rexSizer.padding;
            childHeight += (padding.top + padding.bottom);
            result += childHeight;
        }
    }
    result = Math.max(result, this.minHeight);
    return result;
}

export default GetChildrenHeight;