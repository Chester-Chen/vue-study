<template>
    <div class="app-container">
        <!-- header -->
	

        <!-- router-view -->
		<transition mode="out-in" style="background-color: #efeff4;">
        	<router-view style="background-color: #efeff4;"></router-view>		
		</transition>

        <!-- Tabbar -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/message">
				<span class="mui-icon mui-icon-chat"></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/learn">
				<span class="mui-icon mui-icon-pengyouquan"></span>
				<span class="mui-tab-label">学习圈</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/my">
                <span class="mui-icon mui-icon-contact"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>

    </div>
</template>

<script>
export default {
    data() {
		return {
		
		}
	},
}
</script>

<style lang="scss" scoped>
	html, body {
		height: 100%;
		background-color: #f2f2f2;

	}
	.app-container {
		padding: 0 6px;
	}
	.mint-header {
		z-index: 1;
	}
    .app-container {
		height: 100%;
        padding-top: 48px;
		padding-bottom: 50px;
		background-color: #f2f2f2;
    }

	.v-enter, .v-leave-to {
		opacity: 0;
		transform: translateX(-100%);
	}
	
	.v-enter-active, .v-leave-active {
		transition: all 0.3s ease;
		position: absolute;
	}

	// 解决底部导航不能点击的bug
	.mui-bar-tab .mui-tab-item1.mui-active {
	color: #007aff;
	}
	.mui-bar-tab .mui-tab-item1 {
	display: table-cell;
	overflow: hidden;
	width: 1%;
	height: 50px;
	text-align: center;
	vertical-align: middle;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: #929292;
	}
	.mui-bar-tab .mui-tab-item1 .mui-icon {
	top: 3px;
	width: 24px;
	height: 24px;
	padding-top: 0;
	padding-bottom: 0;
	}
	.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
	font-size: 11px;
	display: block;
	overflow: hidden;
	text-overflow: ellipsis;
	}
	.mui-bar-tab .mui-tab-item1.mui-active {
	color: #007aff;
	}
	.mui-bar-tab .mui-tab-item1 {
	display: table-cell;
	overflow: hidden;
	width: 1%;
	height: 50px;
	text-align: center;
	vertical-align: middle;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: #929292;
	}
</style>
