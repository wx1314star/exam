package com.wx.exam.core.api.dto;

import com.wx.exam.core.api.dto.BaseDTO;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * <p>
 * 是否状态通用请求
 * </p>
 *
 * @author wx
 * 
 */
@Data
@ApiModel(value="是否状态通用请求", description="是否状态通用请求")
@AllArgsConstructor
@NoArgsConstructor
public class BaseIfReqDTO extends BaseDTO {


    @ApiModelProperty(value = "要修改对象的ID列表", required=true)
    private List<String> ids;

    @ApiModelProperty(value = "启用状态，true/false", required=true)
    private Boolean enabled;
}
