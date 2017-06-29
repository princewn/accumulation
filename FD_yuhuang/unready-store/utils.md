    var util = {
        ajaxRequest: function(url,param,type){
            var response;
            $.ajax({
                    url: url,
                    data: param,
                    async: true,
                    type: type,
                    success: function(rsp){
                        console.log(rsp);
                        response = rsp;
                    },
                    error: function(msg){dddd
                        console.log(msg);
                    }
                });
            return response;
        },
        /**
         * 填充深层属性，并返回最深的属性值
         * @param  {Object|Array} root 起始对象
         * @param  {String} path 属性路径，格式为：'.a.b[].3'，其中`b[]`，表示属性名为b，数组类型
         * @return {Any}      最深的属性值
         */
        fillDeepProperty: function(root, path) {
            var current = root;
            var paths = path.split('.');
            paths.shift();
            paths.forEach(function(p) {
                var defaultValue = /\[\]$/.test(p) ? [] : {};
                var defaultValue = {};
                if (/\[\]$/.test(p)) {
                    defaultValue = [];
                    p = p.replace(/\[\]$/, '');
                }
                if (/^[0-9]+$/.test(p)) {
                    p = Number(p.replace(/^0*/, ''));
                }
                current = current[p] = current[p] || defaultValue;
            });
            return current;
        },

        /**
         * 获取深属性
         * @param  {Object|Array} root 起始对象
         * @param  {String} path 属性路径，格式为：'.a.b.3'
         * @return {Any}      最深的属性值
         */
        deepProperty: function(root, path) {
            if (!root) return undefined;
            var current = root;
            var paths = path.split('.');
            paths.shift();
            for (var i = 0; i < paths.length; i++) {
                current = current[paths[i]];
                if (!current) {
                    return undefined;
                }
            }
            return current;
        }
        // var service = App.util.deepProperty(rsp,'.qianniu_item_recommend_get_response.recommend_items.item_page_v_o.0.items.item_info_v_o');
    }



                    // that.$el.find('.J_initiativeTbody').html(that.template.relation, {
                //             relations: res.userRelation
                //         }));
                // that.$el.find('.J_initiativeTbody').html( _.template($('#JT_Relation').html(),{relations: res.result}));

                // _.template($('.J_initiativeTbody').html(), res.userRelation);

                // that.$el.find('.J_initiativeTbody').append(that.template.relation({relations : res.userRelation}));