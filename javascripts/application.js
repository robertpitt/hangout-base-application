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
(function(exports){

	/*
	 * Application type enumeration
	 * @global
	*/
	var ApplicationTypes = {
		EXTENSION : 0,
		APPLICATION : 1
	};

	/*
	 * @eventBound
	 * boolean to assure events are not bound more then once
	*/
	var eventsBound = false;

	/*
	 * @eventMap
	 * A key/value map to bind gapi to application
	*/
	var eventMap = {
		"hangout" : {
			"onAppVisible"					: "onAppVisible",
			"onEnabledParticipantsChanged"	: "onEnabledParticipantsChanged",
			"onParticipantsAdded"			: "onParticipantsAdded",
			"onParticipantsChanged"			: "onParticipantsChanged",
			"onParticipantsDisabled"		: "onParticipantsDisabled",
			"onParticipantsEnabled"			: "onParticipantsEnabled",
			"av" : {
				"onCameraMute"		: "onCameraMute",
				"onHasCamera"		: "onHasCamera",
				"onHasMicrophone"	: "onHasMicrophone",
				"onHasSpeakers"		: "onHasSpeakers",
				"onMicrophoneMute"	: "onMicrophoneMute",
				"onVolumesChanged"	: "onVolumesChanged"
			},
			"effects" : {
				"FaceTrackingFeature" : "FaceTrackingFeature"
			},
			"data" : {
				"onStateChanged" : "onStateChanged"
			},
			"layout" : {
				"onChatpaneVisible" : "onChatpaneVisible"
				"onHasNotice" : "onHasNotice"
			}
		}
	};

	/**
	 * @constructor
	 * This is fired immediately after the javascript has loaded
	*/
	function HangoutApplication()
	{
	};

	HangoutApplication.prototype._construct()
	{
		/**
		 * Application type
		 * Use one of the following:
		 * * ApplicationTypes.APPLICATION
		 * * ApplicationTypes.EXTENSION
		*/
		this.applicationtype = ApplicationTypes.APPLICATION;

		/*
		 * Initialize event bindint
		*/
		this.initializeEventBinding();
	}

	/*
	 * @initializeEventBinding
	 * @private
	*/
	HangoutApplication.prototype.initializeEventBinding = function()
	{
		if(eventsBound === true)
		{
			throw "Cannot re-bind core events.";
		}

		gapi.hangout.onApiReady.add(this.onGapiReady.bind(this));
	};

	/*
	 * Event Handler for {gapi.hangout.onApiReadyevent}
	 * @private
	*/
	HangoutApplication.prototype.onGapiReady = function(event)
	{
		if(event.isApiReady === true)
		{
			/**
			 * Map all events to a handler
			*/
			this.bindEventMap(gapi, eventMap);

			/*
			 * execute the main initilize method
			*/
			this.initialize();
		}
	};

	HangoutApplication.prototype.bindEventMap = function(pointer, ns)
	{
		for(var evt in ns)
		{
			if(typeof ns[evt] == "string")
			{
				if(this[ns[evt]])
				{
					pointer[ns[evt]].add(this[ns[evt]].bind(this));
				}
			}
			else if(typeof ns[evt] == "object")
			{
				this.bindEventMap(pointer[evt], ns[evt])
			}
		}
	}

	HangoutApplication.prototype.initialize = function()
	{
	}

	/**
	 * Export the application to the global namespace
	*/
	exports["HangoutApplication"] = HangoutApplication;
})(window || {})