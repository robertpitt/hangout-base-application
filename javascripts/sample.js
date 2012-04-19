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

	/*
	 * Initialize
	 * Fired by parent context
	*/
	Application.prototype.initialize = function()
	{
		/*
		 * Test
		*/
		try{
			console.log("this.getEnabledParticipants()", this.getEnabledParticipants());
			console.log("this.getHangoutUrl()", this.getHangoutUrl());
			console.log("this.getHangoutId()", this.getHangoutId());
			console.log("this.getLocale()", this.getLocale());
			console.log("this.getParticipantId()", this.getParticipantId());
			console.log("this.getParticipants()", this.getParticipants());
			console.log("this.isApiReady()", this.isApiReady());
			console.log("this.isAppVisible()", this.isAppVisible());
		}catch(e)
		{
			console.log(e);
		}
	};

	Application.prototype.onMicrophoneMute = function(event)
	{
	}

	/*
	 * Instantiate and export
	*/
	global["app"] = new Application();

})(window || {});