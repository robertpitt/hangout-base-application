/**
 * @copyright
 * Basic outline for a javascript based application
 * Copyright (C) <year>  <name of author>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
(function(global){

	function Application()
	{
		/*
		 * We call the construct to inform the backend to bind all events
		*/
		this._construct(this);
	};

	//inherit
	Application.prototype = new global["HangoutApplication"]();

	Application.prototype.setHeader = function(title, icon)
	{
		if(!document.getElementById("header"))
		{
			var header = document.createElement("div");
			var titlec = document.createElement("span");
			header.setAttribute("id", "header");
			if(icon){
				var header_icon = document.createElement("img");
				header_icon.setAttribute("id", "header_icon");
				header_icon.setAttribute("src", icon);
				header_icon.setAttribute("width", "16");
				header_icon.setAttribute("height", "16");
				header.appendChild(header_icon);
			}
			titlec.setAttribute("id", "title");
			header.appendChild(titlec);
			this.getAppContainer().appendChild(header);
		}
		document.getElementById("title").innerHTML = title;
	}
	
	/*
	 * Initialize
	 * Fired by parent context
	*/
	Application.prototype.initialize = function()
	{
		this.addAppHeader("Sample Application", "//tolxdorff.appspot.com/a/lowerthird/i/16x16_logo.png");
	};

	Application.prototype.onMicrophoneMute = function(event)
	{
	}

	/*
	 * Instantiate and export
	*/
	global["app"] = new Application();

})(window || {});