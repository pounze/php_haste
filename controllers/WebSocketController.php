<?php

	class WebSocketController
	{
		public function request($input)
		{

			$user_name = $input->name; //sender name
			$user_message = $input->message; //message text
			$user_color = $input->color; //color
			
			//prepare data to be sent to client
			
			return ['type'=>'usermsg', 'name'=>$user_name, 'message'=>$user_message, 'color'=>$user_color,'cortex'=>$input->cortex];
		}
	}
?>